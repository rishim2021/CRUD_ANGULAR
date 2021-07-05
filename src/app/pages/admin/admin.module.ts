import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
