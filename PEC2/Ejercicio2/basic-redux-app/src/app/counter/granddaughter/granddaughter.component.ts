import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { reset } from '../counter.action';

@Component({
  selector: 'app-granddaughter',
  templateUrl: './granddaughter.component.html',
  styleUrls: ['./granddaughter.component.css']
})
export class GranddaughterComponent implements OnInit {

  // @Input() counter: number;
  // @Output() changeCounter = new EventEmitter<number>();

  constructor(private store: Store<AppState>) { }

  counter: number;

  ngOnInit(): void {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  reset(): void {
    // this.counter = 0;
    // this.changeCounter.emit(this.counter);

    this.store.dispatch(reset());
  }

}
