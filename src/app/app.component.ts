import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  api_key = 'a37df17245b85fa5d17fdc9d7924ac78';
  request = 'https://api.themoviedb.org/3/movie/550?api_key=a37df17245b85fa5d17fdc9d7924ac78';
  
}
