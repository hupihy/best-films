import {Injectable} from "@angular/core";

interface BestFilm {
  isChose: boolean,
  id: number,
  name: string,
  year: string,
  description: string,
  genre: number[],
}
enum Genres {
  'драма' = 1,
  'биография' = 2,
  'история' = 3,
  'фэнтези' = 4,
  'приключения' = 5,
  'боевик' = 6,
  'мультфильм' = 7,
  'комедия' = 8,
  'триллер' = 9,
  'детектив' = 10,
  'фантастика' = 11,
}

@Injectable({providedIn: 'root'})
export class FilmFormService {
  allFilms: any;
  bestFilm: BestFilm = {
    isChose: false,
    id: 0,
    name: '',
    year: '',
    description: '',
    genre: [],
  };

  choseFavoritesFilm(film: BestFilm):void{
    if (this.bestFilm.id != film.id) {
      localStorage.setItem('bestFilm', JSON.stringify(film));
      this.bestFilm = JSON.parse((localStorage.getItem('bestFilm')));
      this.bestFilm.isChose = true;
    } else {
      localStorage.removeItem('bestFilm');
      this.bestFilm.isChose = false;
      this.bestFilm.id = 0;

    }
  }
  swapGenres(genres:number[]):string{
     const newGenres:string[]=[]
    genres.forEach(genresId =>{
      newGenres.push(Genres[genresId])
    })
    return newGenres.join()
  }
}

