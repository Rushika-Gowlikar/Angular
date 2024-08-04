import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToForm() {
    window.location.href = '/form';
  }
  goToView() {
    window.location.href = '/card-view';
  }
  goToReader() {
    window.location.href = '/reader';
  }
  goToGame() {
    window.location.href = '/game';
  }
  goToTableView() {
    window.location.href = '/table-view';
  }
}
