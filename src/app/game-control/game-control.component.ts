import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameCounter } from 'app/shared/game-counter.model';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() onTimerElapsed = new EventEmitter<GameCounter>();
  private timerId = null;
  private timerCounter = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.timerId = setInterval(() => {
      this.onTimerElapsed.emit(
        new GameCounter(this.timerCounter)
      );
      this.timerCounter++;
      console.log('The counter is at ' + this.timerCounter);
    }, 1000);

    console.log('Timer started');
  }

  onStop() {
    if (this.timerId != null) {
        clearInterval(this.timerId);
        this.timerCounter = 0;
        console.log('Timer stopped');
      }
  }
}
