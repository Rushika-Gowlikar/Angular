import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-game',
  templateUrl: './tic-tac-toe-game.component.html',
  styleUrls: ['./tic-tac-toe-game.component.css'],
})
export class TicTacToeGameComponent implements OnInit {
  reformat: string[];
  onAndoff: boolean;
  updated: any;
  isDisabled: boolean = false;
  winner: string;
  winnerName: any;
  playerDetails: any;
  isStart: boolean;
  playerO: any;
  playerX: any;
  startRockGame: boolean = false;
  boxes = ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'];
  ticTacToe: boolean = true;
  rockGame: boolean = false;
  text: string;
  constructor() {}
  ngOnInit(): void {}
  onSubmit(details) {
    this.isStart = true;

    this.playerX = details.form.get('name-x').value;
    this.playerO = details.form.get('name-o').value;
  }

  calculateWinner(boxes) {
    let winnerIndices = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let pattern of winnerIndices) {
      let pos1 = boxes[pattern[0]];
      let pos2 = boxes[pattern[1]];
      let pos3 = boxes[pattern[2]];

      if (pos1 != 'P' && pos2 != 'P' && pos3 != 'P') {
        if (pos1 === pos2 && pos2 === pos3) {
          if (pos1 == 'X') {
            this.winnerName = this.playerX;
          } else if (pos1 == 'O') {
            this.winnerName = this.playerO;
          }
          this.winner = `Winner   ${pos2}  ${this.winnerName.toUpperCase()} `;
          this.isDisabled = true;
          break;
        }
      }
    }
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
      this.calculateWinner(this.boxes);
    }
  }
  startGame(game) {
    if (game === 'rps') {
      this.ticTacToe = false;
      this.rockGame = true;
      this.isStart = false;
    } else if (game === 'ttt') {
      this.ticTacToe = true;
      this.rockGame = false;
      window.location.reload();
    }
  }
}
