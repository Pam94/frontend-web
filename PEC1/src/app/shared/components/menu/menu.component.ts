import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  myRouter: Router;

  constructor(private router: Router) {
    this.myRouter = router;
  }

  ngOnInit(): void {
  }

}
