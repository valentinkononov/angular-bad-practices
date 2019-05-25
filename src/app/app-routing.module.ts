import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnyComponent } from './any/any.component';
import { Subscription01Component } from './subscription01/subscription01.component';
import { Subscription02Component } from './subscription02/subscription02.component';
import { Subscription03Component } from './subscription03/subscription03.component';
import { Subscription04Component } from './subscription04/subscription04.component';
import { Subscription05Component } from './subscription05/subscription05.component';
import { Iterate03Component } from './iterate03/iterate03.component';

const routes: Routes = [
  {
    path: 'any',
    component: AnyComponent,
  },
  {
    path: 'subscription01',
    component: Subscription01Component,
  },
  {
    path: 'subscription02',
    component: Subscription02Component,
  },
  {
    path: 'subscription03',
    component: Subscription03Component,
  },
  {
    path: 'subscription04',
    component: Subscription04Component,
  },
  {
    path: 'subscription05',
    component: Subscription05Component,
  },
  {
    path: 'iterate03',
    component: Iterate03Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
