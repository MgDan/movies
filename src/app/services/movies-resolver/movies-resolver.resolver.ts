import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { MovieModel } from '../../commons/models/movie-model';
import { MoviesCollectionServiceService } from '../movies-collection-service/movies-collection-service.service';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

export const moviesResolverResolver: ResolveFn<Observable<any>> = (route, state) => {
  const id = +route.params['id'];
  const router = inject(Router);
  return inject(MoviesCollectionServiceService).getSingleMovie(1).pipe(map( (data :MovieModel[])=>{
    console.log(data);
    const obj = data.find(item=>{
      return item.id === id;
    })
    if(obj !== undefined && obj !== null){
      return obj;
    }else{
      router.navigate(['/movies']);
      return false;
    }
  }),
  first());
  
};
