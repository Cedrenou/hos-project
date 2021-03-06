import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class LoginModule { }
