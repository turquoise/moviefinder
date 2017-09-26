import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:Array<Object>;

  constructor(
    private router: ActivatedRoute,
    private _movieService: MovieService
  ) {

  }

  ngOnInit() {
    this.router.params
      .subscribe(
        (params: Params) => {
          let id = params['id'];
          this._movieService.getMovie(id)
            .subscribe( movie => {
              //console.log(movie);
              this.movie = movie;
              console.log(this.movie);
            })
        });
  }



}
