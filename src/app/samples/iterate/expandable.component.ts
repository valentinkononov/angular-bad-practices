import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expandable',
  template: `
      <div>
          <span>{{ label }}</span>
          <button type="button" (click)="expand()">Expand/Collapse</button>
          <ng-container *ngIf="expanded">
              <ng-content></ng-content>
          </ng-container>
      </div>
  `,
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
