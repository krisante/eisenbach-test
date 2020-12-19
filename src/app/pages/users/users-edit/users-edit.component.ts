import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { SingleUserDetails, UserCreationDetails } from 'src/app/core/models/users.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  host: {
    class: 'd-flex justify-content-center'
  }
})
export class UsersEditComponent implements OnInit {
  public editForm: FormGroup;
  public editSuccess: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly usersService: UsersService,
    public readonly location: Location,
  ) { }

  public ngOnInit(): void {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      job: [null]
    });
    const userId:number = parseInt(this.route.snapshot.params.id, 10);
    this.usersService.getUser(userId).pipe(
      tap((result: SingleUserDetails) => {
        this.editForm.patchValue({
          name: `${result?.data?.first_name} ${result?.data?.last_name}`,
          job: result?.data?.job
        })
      })
    ).subscribe();
  }

  public async updateUser() {
    if (!this.editForm.valid) {
      return;
    }
    const userInput: UserCreationDetails  = this.editForm.value;
    try { 
      await this.usersService.createUser(userInput);
    } 
    catch(error) {
      console.log('error', error)
    };
    this.editForm.reset(userInput);
    this.editSuccess = true;
  }

  get name() {
    return this.editForm.controls.name;
  }

  public canDeactivate(): boolean {
    if (!(this.editForm.dirty && this.editForm.touched)) {
      return true;
    } else {
      return confirm('Are you sure you want to leave without saving?');
    }
  }

}
