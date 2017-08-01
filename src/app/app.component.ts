import { Component } from '@angular/core';
import { GameCounter } from 'app/shared/game-counter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameNumbersOdd: GameCounter[] = [];
  gameNumbersEven: GameCounter[] = [];

  onGameTimerElapsed(eventArg: GameCounter){
    console.log('Event subscribed in app component: ');
    console.log(eventArg);
    if (eventArg.numeral % 2 === 0) {
      this.gameNumbersEven.push(eventArg);
    } else {
    this.gameNumbersOdd.push(eventArg);
    }
  }
}
