import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from 'src/app/core/guards/can-deactivate.guard';
import { IsUserValidGuard } from 'src/app/core/guards/is-user-valid.guard';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersRegisterComponent } from './users-register/users-register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: '', redirectTo: 'users', pathMatch: 'full'
        },
        {
            path: 'users', component: UsersComponent
        },
        {
            path: 'create-user', component: UsersCreateComponent
        },
        {
            path: 'register-user', component: UsersRegisterComponent
        },
        {
            path: 'edit-user/:id', component: UsersEditComponent,
            canActivate: [IsUserValidGuard],
            canDeactivate: [CanDeactivateGuard]
        }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
