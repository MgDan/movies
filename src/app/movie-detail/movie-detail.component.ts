import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../commons/models/movie-model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {

  public element!: MovieModel ;
  public videoId: String = "";
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.data.subscribe((data :any)=>{
      if(data.hasOwnProperty('moviesResolver')){
        console.log(data);
        this.element = data.moviesResolver;
        console.log("elem",this.element);
        this.videoId = <string>this.element.trailer?.split('=')[1];
      }
    })/*
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);*/
  }

}
