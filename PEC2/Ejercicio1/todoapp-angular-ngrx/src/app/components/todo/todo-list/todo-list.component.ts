import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoListState, TodoState } from 'src/app/store/todo/todo.state';

import * as TodoAction from 'src/app/store/todo/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private store: Store<TodoListState>) { }

  todoListState$: Observable<TodoState[]>;

  ngOnInit(): void {
    this.todoListState$ = this.store.select(state => state.todos);

    this.store.dispatch(new TodoAction.GetTodos());
  }

  onCreate(todo) {

    console.log(todo)
    this.store.dispatch(new TodoAction.CreateTodo(todo));

  }


  onDelete(todo) {

    this.store.dispatch(new TodoAction.DeleteTodo(todo));

  }

  onEdit(todo) {

    this.store.dispatch(new TodoAction.UpdateTodo(todo));

  }

  completeTodo(todo) {

    this.store.dispatch(new TodoAction.CompleteTodo(todo));

  }

}
