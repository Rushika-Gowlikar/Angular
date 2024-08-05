import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-game',
  templateUrl: './tic-tac-toe-game.component.html',
  styleUrls: ['./tic-tac-toe-game.component.css'],
})
export class TicTacToeGameComponent implements OnInit {
  constructor() {}
  playerDetails: any;
  playerO: any;
  playerX: any;
  ngOnInit(): void {}
  onSubmit(details) {
    console.log(details);
  }
  submitDetails(details) {
    console.log(details);
  }
}
