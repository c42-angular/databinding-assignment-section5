import { Component, OnInit, Input } from '@angular/core';
import { GameCounter } from "app/shared/game-counter.model";

@Component({
  selector: 'app-display-even',
  templateUrl: './display-even.component.html',
  styleUrls: ['./display-even.component.css']
})
export class DisplayEvenComponent implements OnInit {
  @Input() gameNumber: GameCounter;

  constructor() { }

  ngOnInit() {
  }

}
