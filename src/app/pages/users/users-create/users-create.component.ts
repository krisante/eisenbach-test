import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCreationDetails } from 'src/app/core/models/users.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  host: {
    class: 'd-flex justify-content-center'
  }
})
export class UsersCreateComponent implements OnInit {
  public creationForm: FormGroup;
  public creationError: string;
  public creationSuccess: boolean;

  constructor(
    public readonly location: Location,
    private readonly fb: FormBuilder,
    private readonly usersService: UsersService
  ) { }

  public ngOnInit(): void {
    this.creationForm = this.fb.group({
      name: ['', [Validators.required]],
      job: [null]
    });
  }

  public async createUser() {
    if (!this.creationForm.valid) {
      return;
    }
    const userInput: UserCreationDetails  = this.creationForm.value;
    try { 
      await this.usersService.createUser(userInput);
    } 
    catch(error) {
      this.creationError = error;
      return;
    };
    this.creationForm.reset();
    this.creationSuccess = true;
  }

  get name() {
    return this.creationForm.controls.name;
  }

  get password() {
    return this.creationForm.controls.job;
  }

}
