import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { MatInputModule, MatIconModule, MatChipsModule, MatCheckbox, MatCheckboxModule, MatCardModule } from '@angular/material'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, MatInputModule, MatIconModule, MatChipsModule,MatCheckboxModule,MatCardModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
