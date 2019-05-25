import { Component, OnInit } from '@angular/core';
import { ItemData } from '../iterate-item/iterate-item.component';

@Component({
  selector: 'app-iterate03',
  templateUrl: './iterate03.component.html',
  styleUrls: ['./iterate03.component.scss']
})
export class Iterate03Component implements OnInit {

  items: ItemData[] = [
    {
      id: 1,
      name: 'Game Of Thrones',
      description: 'TV show by Jeorge R R Martin'
    },
    {
      id: 2,
      name: 'The Lord of the Rings',
      description: 'Trilogy of movies based on John R R Tolkien books',
    },
    {
      id: 3,
      name: 'Big Bang Theory',
      description: 'TV show about young scientist having communication difficulties',
    },
    {
      id: 3,
      name: 'Big Bang Theory',
      description: 'TV show about young scientist having communication difficulties',
    }
  ];

  changeCollection() {
    this.items = [
      {
        id: 1,
        name: 'Game Of Thrones',
        description: 'TV show by Jeorge R R Martin'
      },
      {
        id: 2,
        name: 'The Lord of the Rings',
        description: 'Trilogy of movies based on John R R Tolkien books',
      },
      {
        id: 3,
        name: 'Big Bang Theory',
        description: 'TV show about young scientist having communication difficulties',
      },
      {
        id: 3,
        name: 'Big Bang Theory',
        description: 'TV show about young scientist having communication difficulties',
      }
    ];
  }

  trackByFn(index: number, item: ItemData) {
    return item.id;
  }

  getLabel(item:  ItemData): string {
    console.log(`Item ${item.id} label call`);
    return `Item ${item.id}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
