import { Component } from '@angular/core';
import { MovieModel } from '../commons/models/movie-model';
import { MoviesCollectionServiceService } from '../services/movies-collection-service/movies-collection-service.service';
import { Router } from '@angular/router'

import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrl: './movie-view.component.scss'
})
export class MovieViewComponent {
  sortby = "tittle";
  movies: Array<MovieModel> = [];

  constructor(
    private _snackBar: MatSnackBar, 
    private movieService: MoviesCollectionServiceService,
    private router: Router){
    this.movieService.getMovies().subscribe((val:MovieModel[])=>{
      console.log("val",val);
      this.movies = val;
    })
  }

  sorting(by:string){
    this.sortby = by;
  }

  addToWatch(item: MovieModel){
    let list: MovieModel[] = [];
    let listAsString="";
    console.log(item);
    list.push(...this.getToWatchList());
    if(!list.some(it=>it.title === item.title)){
      list.push(item);
      console.log(list);
      localStorage.setItem('list',JSON.stringify(list));
      this.openSnackBar("Added Movie to List","ok")
    }else{
      console.log(list);
      console.log("nope")
    }
    
  }

  info(item:MovieModel){
    return this.getToWatchList().some((it:MovieModel)=>it.title === item.title) ? "On my watchlist" : "";
  }

  navigate( item: MovieModel){
    console.log(item);
    this.router.navigate([`movies/${item.id}`])
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 2500});
  }

  getToWatchList():MovieModel[]{
    let listAsString="";
    if(localStorage !== undefined && localStorage.hasOwnProperty('list') ){
      listAsString = <string>localStorage.getItem('list');
      return JSON.parse(listAsString);
    }
    return [];
  }
}
