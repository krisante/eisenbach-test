import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegistrationDetails } from 'src/app/core/models/users.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  host: {
    class: 'd-flex justify-content-center'
  }
})
export class UsersRegisterComponent implements OnInit {

  public registrationForm: FormGroup;
  public registrationError: string;
  public registrationSuccess: boolean;

  constructor(
    public readonly location: Location,
    private readonly fb: FormBuilder,
    private readonly usersService: UsersService
  ) { }

  public ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public async createUser() {
    if (!this.registrationForm.valid) {
      return;
    }
    const userInput: UserRegistrationDetails  = this.registrationForm.value;
    try { 
      await this.usersService.registerUser(userInput);
    } 
    catch(error) {
      this.registrationError = error;
      return;
    };
    this.registrationForm.reset();
    this.registrationSuccess = true;
  }

  get email() {
    return this.registrationForm.controls.email;
  }

  get password() {
    return this.registrationForm.controls.email;
  }

}
