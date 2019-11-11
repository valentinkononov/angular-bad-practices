import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnyComponent } from './samples/any.component';
import { V01_subscribe_onlyComponent } from './samples/subscriptions/v01_subscribe_only.component';
import { V02_unsubscribeComponent } from './samples/subscriptions/v02_unsubscribe.component';
import { V03_take_whileComponent } from './samples/subscriptions/v03_take_while.component';
import { V04_take_untilComponent } from './samples/subscriptions/v04_take_until.component';
import { V05_async_pipeComponent } from './samples/subscriptions/v05_async_pipe.component';
import { V06_until_destroyedComponent } from './samples/subscriptions/v06_until_destroyed.component';
import { Iterate03Component } from './samples/iterate/iterate03.component';
import { HomeComponent } from './samples/home.component';

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'any',
    component: AnyComponent,
  },
  {
    path: 'v01_subscribe_only',
    component: V01_subscribe_onlyComponent,
  },
  {
    path: 'v02_unsubscribe',
    component: V02_unsubscribeComponent,
  },
  {
    path: 'v03_take_while',
    component: V03_take_whileComponent,
  },
  {
    path: 'v04_take_until',
    component: V04_take_untilComponent,
  },
  {
    path: 'v05_async_pipe',
    component: V05_async_pipeComponent,
  },
  {
    path: 'v06_until_destroyed',
    component: V06_until_destroyedComponent,
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
