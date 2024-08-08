import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.css'],
})
export class RockPaperScissorsComponent implements OnInit {
  player: any;
  playerName: any;

  constructor() {}

  ngOnInit(): void {}
  submitPlayer(player) {
    this.playerName = player.form.get('player-king').value;
  }
}
