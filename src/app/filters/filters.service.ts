import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {FilmFormService} from "../film-form/film-form.service";



@Injectable({providedIn: 'root'})

export class FiltersService {
  filterFilms: any = [];
  genres: string[] = [
    'все',
    'драма',
    'биография',
    'история',
    'фэнтези',
    'приключения',
    'боевик',
    'мультфильм',
    'комедия',
    'триллер',
    'детектив',
    'фантастика',
  ];

  constructor(public filmFormService: FilmFormService) {
  }

  searchFilter = new Observable<Event>(observer => {
    const search = document.getElementById('search-film');
    search.addEventListener('input', event => {
      observer.next(event);

    })
  });

  selectedGenre(value: string) {
    let genreIndex: number = this.genres.indexOf(value);
    let films = this.filmFormService.allFilms;
    if (genreIndex != 0) {
      films =[]
      this.filterFilms.forEach(film => {
        film.genre.forEach(genreItem => {
          let isFindGenre:boolean =false;
          if(genreItem === genreIndex && !isFindGenre){
            isFindGenre = true;
            films.push(film)

          }
        })
      })
      this.filterFilms = films;
    } else this.filterFilms = films;
  }
}
