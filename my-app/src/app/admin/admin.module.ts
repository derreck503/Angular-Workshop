import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class AdminModule { }
