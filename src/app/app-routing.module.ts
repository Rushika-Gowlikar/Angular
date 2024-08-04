import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './appContent/menu/menu.component';
import { TicTacToeGameComponent } from './appContent/tic-tac-toe-game/tic-tac-toe-game.component';
import { BookReaderComponent } from './appContent/book-reader/book-reader.component';
import { CardViewComponent } from './appContent/card-view/card-view.component';
import { FormComponent } from './appContent/form/form.component';
import { NotFoundComponent } from './appContent/not-found/not-found.component';
import { TableViewComponent } from './appContent/table-view/table-view.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'reader',
    component: BookReaderComponent,
  },
  {
    path: 'card-view',
    component: CardViewComponent,
  },
  {
    path: 'game',
    component: TicTacToeGameComponent,
  },
  {
    path: 'table-view',
    component: TableViewComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
