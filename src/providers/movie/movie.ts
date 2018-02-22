import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private urlPathBase: string = "https://api.themoviedb.org/3";
  private apiKeyMovie: string = "?api_key=d33c85db114fd7bf631bed04dac73163&language=pt-BR";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLastedMovies() {
    return this.http.get(this.urlPathBase + "/movie/popular" + this.apiKeyMovie);
  }
}
