import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-game',
  templateUrl: './tic-tac-toe-game.component.html',
  styleUrls: ['./tic-tac-toe-game.component.css'],
})
export class TicTacToeGameComponent implements OnInit {
  constructor() {}
  playerDetails: any;
  isStart: boolean = false;
  playerO: any;
  playerX: any;
  text = 'Submit Player Names To Start Game!';
  boxes = [null, null, null, 'X', null, null, null, 'O', null];
  ngOnInit(): void {}
  onSubmit(details) {
    this.isStart = true;
    this.text = this.isStart
      ? 'let Start'
      : 'Submit Player Names To Start Game!';
  }
}
