import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaNewComponent } from './pizza-new/pizza-new.component';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
