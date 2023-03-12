import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {FilmFormComponent} from './film-form/film-form.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";

import {MatDialogModule} from "@angular/material/dialog";
import { DialogWindowComponent } from './dialog-window/dialog-window.component';
import { FiltersComponent } from './filters/filters.component';
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    AppComponent,
    FilmFormComponent,
    DialogWindowComponent,
    FiltersComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
