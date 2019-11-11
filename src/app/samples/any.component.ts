import { Component, OnInit } from '@angular/core';

export interface Movie {
  name: string;
}

@Component({
  selector: 'app-any',
  template: `
      <p>
          {{ movie.name }}
      </p>
  `,
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
