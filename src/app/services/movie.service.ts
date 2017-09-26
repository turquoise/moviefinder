import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {

  apikey = 'a37df17245b85fa5d17fdc9d7924ac78';
  url = 'https://api.themoviedb.org/3/';

  //request = 'https://api.themoviedb.org/3/movie/550?api_key=a37df17245b85fa5d17fdc9d7924ac78';
  // https://www.themoviedb.org/settings/api/directory

  constructor(private _jsonp: Jsonp) {
    this.apikey = 'a37df17245b85fa5d17fdc9d7924ac78';
    console.log('MovieService initialized...');
  }

  getPopular() {
    return this._jsonp.get(`${this.url}discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=${this.apikey}`)
      .map( res => res.json() );
  }

  getInTheatres() {
    return this._jsonp.get(`${this.url}discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-09-26&primary_release_date.lte=2017-10-30&api_key=${this.apikey}`)
      .map( res => res.json());
  }

  searchMovies(searchStr: string) {
    return this._jsonp.get(`${this.url}search/movie?callback=JSONP_CALLBACK&query=${searchStr}&sort_by=popularity.desc&api_key=${this.apikey}`)
      .map(res => res.json());
  }

}
