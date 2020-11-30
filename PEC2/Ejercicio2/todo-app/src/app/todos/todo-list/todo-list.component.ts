import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../model/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private store: Store<AppState>,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.store.select('todosApp').subscribe(todosResponse => {
      this.todos = todosResponse.todos
    });
    this.todoService.getAllTodos().subscribe((todos) => this.todos = todos);
  }

}
