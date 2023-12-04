import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { moviesResolverResolver } from './services/movies-resolver/movies-resolver.resolver';

const routes: Routes = [
  { path:"", redirectTo:"movies", pathMatch: "full" },
  { path:"movies", component: MoviesContainerComponent, children:[
    { path:"", component: MovieViewComponent },
    { path:":id", component: MovieDetailComponent, resolve: {moviesResolver: moviesResolverResolver}, }
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
