import { Component, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { SnackBarData } from 'src/app/models/snackBarData';

@Component({
  selector: 'app-snack-bar-error',
  templateUrl: './snack-bar-error.component.html',
  styleUrls: ['./snack-bar-error.component.scss']
})
export class SnackBarErrorComponent{
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData) { }
}
