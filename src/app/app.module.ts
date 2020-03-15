import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { MatInputModule, MatIconModule, MatChipsModule, MatCheckbox, MatCheckboxModule, MatCardModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatProgressSpinnerModule } from '@angular/material'
import { FormsModule } from '@angular/forms';
import { SnackBarErrorComponent } from './shared/snack-bar-error/snack-bar-error.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterSelectComponent,
    SnackBarErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatCheckboxModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [SnackBarErrorComponent],

  providers: [ApiService, {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
