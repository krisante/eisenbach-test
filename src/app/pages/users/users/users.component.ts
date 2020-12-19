import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserList } from 'src/app/core/models/users.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  private userListSubscription: Subscription;
  public userList$ = new Subject<UserList>();
  public currentPage = 1;
  public deletionSuccess: boolean;

  constructor(private readonly usersService: UsersService) { }

  public ngOnInit(): void {
    this.getListOfUsers(1);
  }

  public ngOnDestroy() {
    this.userListSubscription ? this.userListSubscription.unsubscribe : null;
  }

  public getListOfUsers(pageNumber: number) {
    this.userListSubscription = this.usersService.getUsers(pageNumber).pipe(
      tap((result) => {
        if (result && result.data) {
          this.userList$.next(result);
          this.currentPage = pageNumber;
        }
      })
      ).subscribe();
  }

  public async onDeleteUser(userId: number) {
    if (userId) {
      try {
        await this.usersService.deleteUser(userId);
      } catch(err) {
        console.log('error:', err);
      }
      this.deletionSuccess = true;
    }
  }

}
