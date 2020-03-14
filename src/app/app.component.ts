import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { CityInfo } from './models/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontendChallenge';
  cities: CityInfo[]
  constructor(private apiService:ApiService){}
  ngOnInit(){
    this.apiService.getConfig().subscribe(response => {
      console.log('response ->', response)
      this.cities = response['data']
    })
  }
}
