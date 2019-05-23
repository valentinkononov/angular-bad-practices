import { Component, OnInit } from '@angular/core';

export interface Movie {
  name: string;
}

@Component({
  selector: 'app-any',
  templateUrl: './any.component.html',
  styleUrls: ['./any.component.scss']
})
export class AnyComponent implements OnInit {

  movie: Movie = {
    name: 'Game of Thrones',
  };

  constructor() { }

  ngOnInit() {
    this.movie.name = 'Forest Gump';
  }

}
