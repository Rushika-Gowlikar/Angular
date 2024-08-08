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
        this.result = 'Tie';
      } else if (computer === 'Paper') {
        this.result = 'Loss';
      } else if (computer === 'Scissors') {
        this.result = 'Win';
      }
    } else if (player === 'Paper') {
      if (computer === 'Rock') {
        this.result = 'Win';
      } else if (computer === 'Paper') {
        this.result = 'Tie';
      } else if (computer === 'Scissors') {
        this.result = 'Loss';
      }
    } else if (player === 'Scissors') {
      if (computer === 'Rock') {
        this.result = 'Loss';
      } else if (computer === 'Paper') {
        this.result = 'Win';
      } else if (computer === 'Scissors') {
        this.result = 'Tie';
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
