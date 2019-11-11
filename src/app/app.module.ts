import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnyComponent } from './samples/any.component';
import { V01_subscribe_onlyComponent } from './samples/subscriptions/v01_subscribe_only.component';
import { V02_unsubscribeComponent } from './samples/subscriptions/v02_unsubscribe.component';
import { V03_take_whileComponent } from './samples/subscriptions/v03_take_while.component';
import { V04_take_untilComponent } from './samples/subscriptions/v04_take_until.component';
import { V05_async_pipeComponent } from './samples/subscriptions/v05_async_pipe.component';
import { V06_until_destroyedComponent } from './samples/subscriptions/v06_until_destroyed.component';
import { TimerService } from './services/timer.service';
import { ImportCheckComponent } from './samples/import-check.component';
import { Iterate03Component } from './samples/iterate/iterate03.component';
import { IterateItemComponent } from './samples/iterate/iterate-item.component';
import { ExpandableComponent } from './samples/iterate/expandable.component';
import { LabelPipe } from './pipes/label.pipe';
import {HomeComponent} from './samples/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnyComponent,
    V01_subscribe_onlyComponent,
    V02_unsubscribeComponent,
    V03_take_whileComponent,
    V04_take_untilComponent,
    V05_async_pipeComponent,
    V06_until_destroyedComponent,
    ImportCheckComponent,
    ImportCheckComponent,
    Iterate03Component,
    IterateItemComponent,
    ExpandableComponent,
    LabelPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
