import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    SigninRoutingModule

  ]
})
export class SigninModule { }
