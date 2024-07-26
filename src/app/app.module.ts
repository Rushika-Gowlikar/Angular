import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './application/header/header.component';
import { FooterComponent } from './application/footer/footer.component';
import { MenuComponent } from './appContent/menu/menu.component';
import { CardViewComponent } from './appContent/card-view/card-view.component';
import { BookReaderComponent } from './appContent/book-reader/book-reader.component';
import { TicTacToeGameComponent } from './appContent/tic-tac-toe-game/tic-tac-toe-game.component';
import { FormComponent } from './appContent/form/form.component';
import { NotFoundComponent } from './appContent/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagSuggestMultiSelectComponent } from './appContent/tag-suggest-multi-select/tag-suggest-multi-select.component';
import { TodoListComponent } from './appContent/todo-list/todo-list.component';
import { TodoFormComponent } from './appContent/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    MenuComponent,
    CardViewComponent,
    BookReaderComponent,
    TicTacToeGameComponent,
    FormComponent,
    NotFoundComponent,
    TagSuggestMultiSelectComponent,
    TodoListComponent,
    TodoFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
