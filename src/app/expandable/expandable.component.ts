import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss']
})
export class ExpandableComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  expanded = false;

  expand() {
    this.expanded = !this.expanded;
  }

  constructor() { }

  ngOnInit() {
  }

}
