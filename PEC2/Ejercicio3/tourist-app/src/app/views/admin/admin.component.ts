import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public ownerId: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('activities').subscribe(ownerResponse =>
      this.ownerId = ownerResponse.ownerId);
  }

}
