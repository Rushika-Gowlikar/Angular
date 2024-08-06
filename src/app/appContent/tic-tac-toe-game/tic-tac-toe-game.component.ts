import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-game',
  templateUrl: './tic-tac-toe-game.component.html',
  styleUrls: ['./tic-tac-toe-game.component.css'],
})
export class TicTacToeGameComponent implements OnInit {
  reformat: string[];
  onAndoff: boolean = true;
  updated: any;
  isDisabled: boolean = false;

  constructor() {}
  playerDetails: any;
  isStart: boolean = false;
  playerO: any;
  playerX: any;
  text = 'Submit Player Names To Start Game!';
  boxes = ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'];
  ngOnInit(): void {}
  onSubmit(details) {
    this.isStart = true;
    this.text = this.isStart
      ? 'let Start'
      : 'Submit Player Names To Start Game!';

    this.playerX = details.form.get('name-x').value;
    this.playerO = details.form.get('name-o').value;
  }
  squareChecked(i, box) {
    if (box == 'P') {
      this.onAndoff = !this.onAndoff;
      this.boxes.map((value, key) => {
        if (key == i) {
          value = this.onAndoff ? 'X' : 'O';
          this.boxes.splice(i, 1, value);
        }
      });
    }
  }
}
