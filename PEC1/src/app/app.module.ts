import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InmemoryFakeDbService } from './shared/services/inmemory-db/inmemory-fake-db.service';
import { LayoutModule } from './shared/components/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './views/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    LayoutModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InmemoryFakeDbService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
