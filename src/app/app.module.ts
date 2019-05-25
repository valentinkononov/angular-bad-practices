import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnyComponent } from './any/any.component';
import { Subscription01Component } from './subscription01/subscription01.component';
import { Subscription02Component } from './subscription02/subscription02.component';
import { Subscription03Component } from './subscription03/subscription03.component';
import { Subscription04Component } from './subscription04/subscription04.component';
import { Subscription05Component } from './subscription05/subscription05.component';
import { TimerService } from './services/timer.service';
import { ImportCheckComponent } from './import-check/import-check.component';
import { Iterate03Component } from './iterate03/iterate03.component';
import { IterateItemComponent } from './iterate-item/iterate-item.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { LabelPipe } from './pipes/label.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnyComponent,
    Subscription01Component,
    Subscription02Component,
    Subscription03Component,
    Subscription04Component,
    Subscription05Component,
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
