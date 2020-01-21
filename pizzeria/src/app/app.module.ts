import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PizzaItemComponent } from './pizzas/pizza-item/pizza-item.component';
import { PizzaListComponent } from './pizzas/pizza-list/pizza-list.component';
import { PizzaNewComponent } from './pizzas/pizza-new/pizza-new.component';
import { PizzaService } from './services/pizza.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PizzaItemComponent,
    PizzaListComponent,
    PizzaNewComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [PizzaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
