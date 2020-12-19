import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersService } from 'src/app/core/services/users.service';
import { UserCardComponent } from './users/user-card/user-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersRegisterComponent } from './users-register/users-register.component';



@NgModule({
  declarations: [UsersComponent, UsersCreateComponent, UsersEditComponent, UserCardComponent, UsersRegisterComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
