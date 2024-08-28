import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './application/header/header.component';
import { FooterComponent } from './application/footer/footer.component';
import { MenuComponent } from './appContent/menu/menu.component';
import { CardViewComponent } from './appContent/card-view/card-view.component';
import { TicTacToeGameComponent } from './appContent/tic-tac-toe-game/tic-tac-toe-game.component';
import { FormComponent } from './appContent/form/form.component';
import { NotFoundComponent } from './appContent/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoFormComponent } from './appContent/todo-list/todo-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { TableViewComponent } from './appContent/table-view/table-view.component';
import { RockPaperScissorsComponent } from './appContent/rock-paper-scissors/rock-paper-scissors.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditProductDetailsComponent } from './appContent/edit-product-details/edit-product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTableRowComponent } from './appContent/add-table-row/add-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CardViewComponent,
    TicTacToeGameComponent,
    FormComponent,
    NotFoundComponent,

    TodoFormComponent,
    TableViewComponent,
    RockPaperScissorsComponent,
    EditProductDetailsComponent,
    AddTableRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
