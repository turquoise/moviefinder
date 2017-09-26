import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularList:Array<Object>;
  theatresList:Array<Object>;
  searchStr: string;
  searchRes:Array<Object>;

  constructor(private _movieService: MovieService) {
    this._movieService.getPopular()
      .subscribe( res => {
        //console.log(res.results);
        this.popularList = res.results;
      });

    this._movieService.getInTheatres()
      .subscribe( res => {
        //console.log(res.results);
        this.theatresList = res.results;
      });

  }

  ngOnInit() {
  }

  searchMovies() {
    console.log(this.searchStr);
    this._movieService.searchMovies(this.searchStr)
      .subscribe( res => {
        this.searchRes = res.results;
      })
  }

}
