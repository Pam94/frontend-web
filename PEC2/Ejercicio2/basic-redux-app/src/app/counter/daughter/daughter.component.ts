import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { duplicate } from '../counter.action';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.css']
})
export class DaughterComponent implements OnInit {

  //@Input() counter: number;
  //@Output() changeCounter = new EventEmitter<number>();

  counter: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter
    });
  }

  duplicate(): void {

    this.store.dispatch(duplicate({ number: 2 }));

    // this.counter = this.counter * 2;
    // this.changeCounter.emit(this.counter);

  }

  /*resetGrandDaughter(newCounter: number): void {
    this.counter = newCounter;
    this.changeCounter.emit(this.counter);
  }*/

}
