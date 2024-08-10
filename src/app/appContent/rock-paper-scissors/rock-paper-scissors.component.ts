import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.css'],
})
export class RockPaperScissorsComponent implements OnInit {
  player: any;
  playerName: any;
  result: string;
  finalResult: any;
  started: boolean = false;
  score = {
    win: 0,
    loss: 0,
    tie: 0,
  };
  constructor() {}
  ngOnInit(): void {}
  submitPlayer(player) {
    this.playerName = player.form.get('player-king').value;
  }
  startGame(playerMove) {
    this.started = true;
    let computerMove = '';
    let randomNumber = Math.floor(Math.random() * 3); //0,2,3

    if (randomNumber === 0) {
      computerMove = 'Rock';
    } else if (randomNumber === 1) {
      computerMove = 'Paper';
    } else if (randomNumber === 2) {
      computerMove = 'Scissors';
    }
    this.payerMove(playerMove, computerMove);
  }
  payerMove(player, computer) {
    this.result = '';
    if (player === 'Rock') {
      if (computer === 'Rock') {
        this.result = 'you lost your game in a draw';
        this.score.tie += 1;
      } else if (computer === 'Paper') {
        this.result = 'you lost the game';
        this.score.loss += 1;
      } else if (computer === 'Scissors') {
        this.result = 'you win the game';
        this.score.win += 1;
      }
    } else if (player === 'Paper') {
      if (computer === 'Rock') {
        this.result = 'you win the game';
        this.score.win += 1;
      } else if (computer === 'Paper') {
        this.result = 'you lost your game in a draw';
        this.score.tie += 1;
      } else if (computer === 'Scissors') {
        this.result = 'you lost the game';
        this.score.loss += 1;
      }
    } else if (player === 'Scissors') {
      if (computer === 'Rock') {
        this.result = 'you lost the game';
        this.score.loss += 1;
      } else if (computer === 'Paper') {
        this.result = 'you win the game';
        this.score.win += 1;
      } else if (computer === 'Scissors') {
        this.result = 'you lost your game in a draw';
        this.score.tie += 1;
      }
    }
    setTimeout(() => {
      this.finalResult = `${this.playerName.toUpperCase()} Choose ${player} And COMPUTER Choose  ${computer} Final result - ${
        this.result
      }  `;
      this.started = false;
    }, 1000);
  }
}
