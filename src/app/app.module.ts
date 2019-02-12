import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownTimerGetSetComponent } from './countdown-timer-get-set/countdown-timer-get-set.component';
import { CountdownTimerAliasComponent } from './countdown-timer-alias/countdown-timer-alias.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    CountdownTimerGetSetComponent,
    CountdownTimerAliasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
