import {Component, OnInit} from '@angular/core';
import {FilmFormService} from "./film-form.service";
import {HttpClient} from "@angular/common/http";
import {DialogWindowService} from "../dialog-window/dialog-window.service";

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {
  film:object
  constructor(public filmFormService: FilmFormService,
              public  dialogWindowService:DialogWindowService,
              private http: HttpClient,){
    this.http.get("./assets/data.json")
      .subscribe((filmsData) => {
        this.filmFormService.allFilms = filmsData
      })
  }

  ngOnInit():void{
    if (localStorage.getItem('bestFilm')) {
      this.filmFormService.bestFilm = JSON.parse((localStorage.getItem('bestFilm')))
      this.filmFormService.bestFilm.isChose = true
    }
  }

}

