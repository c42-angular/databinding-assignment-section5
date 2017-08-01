import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { DisplayOddComponent } from './display-odd/display-odd.component';
import { DisplayEvenComponent } from './display-even/display-even.component';


@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    DisplayOddComponent,
    DisplayEvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
