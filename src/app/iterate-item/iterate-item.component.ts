import { Component, OnInit, Input, OnDestroy } from '@angular/core';

export interface ItemData {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-iterate-item',
  templateUrl: './iterate-item.component.html',
  styleUrls: ['./iterate-item.component.scss']
})
export class IterateItemComponent implements OnInit, OnDestroy {

  @Input()
  data: ItemData;

  ngOnInit() {
    console.log(`data ${this.data.id} initialized`);
  }

  ngOnDestroy() {
    console.log(`data ${this.data.id} destroyed`);
  }

}
