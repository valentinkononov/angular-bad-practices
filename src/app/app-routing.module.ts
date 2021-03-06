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
import { V07_async_template_multipleComponent } from './samples/subscriptions/v07_async_template_multiple.component';
import { V08_async_endless_loopComponent } from './samples/subscriptions/v08_async_endless_loop.component';
import { V09_async_template_propsComponent } from './samples/subscriptions/v09_async_template_props.component';
import {V10_async_shareComponent} from "./samples/subscriptions/v10_async_share.component";

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
    path: 'v07_async_template_multiple',
    component: V07_async_template_multipleComponent,
  },
  {
    path: 'v08_async_endless_loop',
    component: V08_async_endless_loopComponent,
  },
  {
    path: 'v09_async_template_props',
    component: V09_async_template_propsComponent,
  },
  {
    path: 'v10_async_share',
    component: V10_async_shareComponent,
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
