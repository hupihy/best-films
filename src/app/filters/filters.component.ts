import {Component, OnInit} from '@angular/core';
import {FilmFormService} from "../film-form/film-form.service";
import {debounceTime, map} from "rxjs";

import {FiltersService} from "./filters.service";


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(public filtersService: FiltersService,
              public filmFormService: FilmFormService) {

  }

  ngOnInit():void{
    this.filtersService.searchFilter.pipe(
      map(event => {
        return (event.target as HTMLInputElement).value;
      }),
      debounceTime(400))
      .subscribe(searchFilm => {
        let films  = this.filmFormService.allFilms;
        console.log(films)
        if (searchFilm.trim()) {
           films  = this.filtersService.filterFilms = [];
          this.filmFormService.allFilms.forEach(film => {
            const lengthSearchName: number = searchFilm.toLowerCase().split("").length;
            const chekingFilm = film.name.toLowerCase().split(" ");
            let findFilm: boolean = false;
            chekingFilm.forEach(element => {
              if (element.split('').slice(0, lengthSearchName).join('') === searchFilm && !findFilm) {
                films.push(film);
                findFilm = true;
              }
            })
          })
        } else this.filtersService.filterFilms = films;
      })
  }
}
