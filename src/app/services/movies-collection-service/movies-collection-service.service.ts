import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieModel } from '../../commons/models/movie-model';

@Injectable({
  providedIn: 'root'
})
export class MoviesCollectionServiceService {

  private movies$: BehaviorSubject<MovieModel[]> = new BehaviorSubject<MovieModel[]>([]);

  constructor() { 
    this.movies$.next([
      {
        id: 1,
        title: "Avengers: Age of Ultron", 
        image: "Avengers.png",
        description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
        releaseDate: new Date(2015,4,1),
        genre: "Action, Adventure, Sci-Fi",
        rating: 7.3,
        duration: "2h 21min",
        trailer: "https://www.youtube.com/watch?v=tmeOjFno6Do"
      },
      {
        id: 2,
        title: "Guardians of The Galaxy", 
        image: "Guardians of The Galaxy.png",
        description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        releaseDate: new Date(2014,7,1),
        genre: "Action, Adventure, Comedy",
        rating: 8.0,
        duration: "2h 10min",
        trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA"
      },
      {
        id: 3,
        title: "Knives Out", 
        image: "Knives Out.png",
        description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
        releaseDate: new Date(2019,10,19),
        genre: "Comedy, Crime, Drama",
        rating: 7.9,
        duration: "2h 10min",
        trailer: "https://www.youtube.com/watch?v=qGqiHJTsRkQ"
      },
      {
        id: 4,
        title: "Spider-Man: Into the Spider-Verse", 
        image: "Spider Man.png",
        description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        releaseDate: new Date(2018,11,14),
        genre: "Action, Animation, Adventure",
        rating: 8.4,
        duration: "1h 57min",
        trailer: "https://www.youtube.com/watch?v=tg52up16eq0"
      },
      {
        id: 5,
        title: "Tenet", 
        image: "Tenet.png",
        description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        releaseDate: new Date(2020,8,3),
        genre: "Action, Sci-Fi",
        rating: 7.8,
        duration: "2h 30min",
        trailer: "https://www.youtube.com/watch?v=LdOM0x0XDMo"
      }
    ]);
  }

  getMovies(): Observable<MovieModel[]>{
    return this.movies$.asObservable();
  }

  getSingleMovie(id: number): Observable<MovieModel[]>{
    return this.movies$.asObservable()
  }

}
