import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { CityInfo } from './models/city';
import { MatSnackBar } from '@angular/material';
import { SnackBarErrorComponent } from './shared/snack-bar-error/snack-bar-error.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontendChallenge';
  showSpinner = true;
  cities: CityInfo[];
  undoAction:any
  constructor(private apiService:ApiService, private _snackBar: MatSnackBar){}
  ngOnInit(){
    this.apiService.getConfig().subscribe(response => {
      this.showSpinner = false;
      this.cities = response['data']
    }, err => {
      this.showSpinner = false;
      this._snackBar.openFromComponent(SnackBarErrorComponent, {
        data:{type:'Error on loading cities', text: err.error.message}
      });
    })

  }

  updateSelection($event){
    console.log('updateSelection $event ->',$event)
    this.apiService.setSelection($event.data).subscribe(response =>{

    },
    err => {
      const nextAction = $event.action === 'checking' ? 'unchecked':'checked';
      this._snackBar.openFromComponent(SnackBarErrorComponent, {
        data:{type:`Error on ${$event.action} ${$event.cityName}. It will be ${nextAction}`, text: err.error.message}
      });
      this.undoAction = $event.data;
    });
  }
}
