import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CityInfo } from '../models/city';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent{
  @Input() cities: CityInfo[]
  @Input() undoAction:any;
  @Output() updateSelection: EventEmitter<any> = new EventEmitter();

  selectedCities: CityInfo[] = [];
  filteredCities:CityInfo[]
  filteredList = {}
  text = ''
  constructor() { }
  ngOnChanges(){
    if(this.undoAction){
      if(this.undoAction[Object.keys(this.undoAction)[0]]){
        this.deleteSelectedCities(+Object.keys(this.undoAction)[0])
        delete this.filteredList[Object.keys(this.undoAction)[0]]
      } else {
        this.addSelectedCities(+Object.keys(this.undoAction)[0])
        this.filteredList[Object.keys(this.undoAction)[0]] = true
      }
    }
  }
  filterCity($event){
    this.filteredCities = [];
    this.text = $event.target.value
    const textSplitted = this.text.split(' ');
    if(this.text.length>2)
      this.filteredCities = this.filteredCities.concat(this.cities.filter(elem => this.matchText(elem, textSplitted)))
  }

  checkCity($event, city: CityInfo){
    $event.preventDefault()
    if(!this.filteredList[city.geonameid]){
      this.filteredList[city.geonameid]=true;
      this.selectedCities.unshift(city);
      this.updateSelection.emit({
        data: {
          [city.geonameid]: true
        },
        cityName:city.name,
        action:'checking'
      })     
    }else {
      this.remove(city)
    }
  }

  matchText(city: CityInfo, textSplitted: string[]){
    return textSplitted.every((text, index) => city.country.indexOf(text) > -1 || (city.subcountry && city.subcountry.indexOf(text) > -1) || city.name.indexOf(text) > -1)
  }

  remove(city: CityInfo): void {
    delete this.filteredList[city.geonameid]
    const index = this.selectedCities.indexOf(city);    
    if (index >= 0) this.selectedCities.splice(index, 1);
    this.updateSelection.emit({
      data: {
        [city.geonameid]: false
      },
      cityName:city.name,
      action:'unchecking'
    })
  }

  deleteSelectedCities(geonameid){
    const newSelectedCities = this.selectedCities.filter(city => city.geonameid!==geonameid);
    this.selectedCities = newSelectedCities;
  }

  addSelectedCities(geonameid){
    const city = this.cities.find(city => city.geonameid === geonameid)
    this.selectedCities.unshift(city);
  }
}
