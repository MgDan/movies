import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from '../models/movie-model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: MovieModel[],by:string): MovieModel[] {
    let paramFn:any;
    if(by==="date"){
      paramFn = (a: MovieModel,b: MovieModel):number=>{
        return ( <Date> a.releaseDate).getTime() - ( <Date> b.releaseDate ).getTime();
      }
    }else{
      paramFn = (a: MovieModel, b: MovieModel) => a.title.localeCompare(b.title);
    }
    return value.sort(paramFn)
  }

}
