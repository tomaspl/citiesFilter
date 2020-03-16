import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CityInfo } from '../models/city';
import { UpdateAction } from '../models/updateAction';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent{
  @Input() cities: CityInfo[]
  @Input() undoAction:Object;
  @Output() updateSelection: EventEmitter<UpdateAction> = new EventEmitter();

  public selectedCities: CityInfo[] = [];
  public filteredCities:CityInfo[]
  public filteredList = {}
  public text = ''

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
    const countryLowCase = city.country.toLowerCase();
    let subcountryLowCase = null;
    if(city.subcountry) subcountryLowCase = city.subcountry.toLowerCase();
    const nameLowCase = city.name.toLowerCase();
    return textSplitted.every(text => countryLowCase.indexOf(text.toLowerCase()) > -1 || (subcountryLowCase && subcountryLowCase.indexOf(text.toLowerCase()) > -1) || nameLowCase.indexOf(text.toLowerCase()) > -1)
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
