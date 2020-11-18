import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as actions from './counter/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-redux-app';

  counter: number;

  constructor(private store: Store<AppState>) {

    //this.counter = 20;
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  increase(): void {
    //this.counter = this.counter + 1;
    this.store.dispatch(actions.increment());
  }

  decrease(): void {
    //this.counter = this.counter - 1;
    this.store.dispatch(actions.decrement());
  }
}
