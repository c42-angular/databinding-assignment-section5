import { Component, OnInit, Input } from '@angular/core';
import { GameCounter } from "app/shared/game-counter.model";

@Component({
  selector: 'app-display-odd',
  templateUrl: './display-odd.component.html',
  styleUrls: ['./display-odd.component.css']
})
export class DisplayOddComponent implements OnInit {
  @Input() gameNumber: GameCounter;

  constructor() { }

  ngOnInit() {
  }

}
