import { Component, OnInit, Input } from '@angular/core';
import { CityInfo } from '../models/city';
import { MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent {
  @Input() cities: CityInfo[]
  selectedCities: CityInfo[] = [];
  filteredCities:CityInfo[]
  filteredList = {}
  constructor() { }

  filterCity($event){
    this.filteredCities = [];
    const text = $event.target.value
    const textSplitted = text.split(' ');
    if(text.length>2)
      this.filteredCities = this.filteredCities.concat(this.cities.filter(elem => this.matchText(elem, textSplitted)))
  }

  checkCity($event, city: CityInfo){
    $event.preventDefault()
    if(!this.filteredList[city.geonameid]){
      this.filteredList[city.geonameid]=true;
      this.selectedCities.unshift(city);      
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
  }
}
