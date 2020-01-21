import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaItemComponent } from './pizzas/pizza-item/pizza-item.component';
import { PizzaListComponent } from './pizzas/pizza-list/pizza-list.component';
import { PizzaNewComponent } from './pizzas/pizza-new/pizza-new.component';
import { PizzaCreateComponent } from './pizzas/pizza-create/pizza-create.component';
import { PizzaService } from './services/pizza.service';

@NgModule({
  declarations: [
    AppComponent,
    PizzaItemComponent,
    PizzaListComponent,
    PizzaNewComponent,
    PizzaCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PizzaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
