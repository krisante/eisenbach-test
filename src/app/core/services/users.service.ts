import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SingleUserDetails, UserCreationDetails, UserList, UserRegistrationDetails } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient: HttpClient) { }

  public getUsers(pageNumber: number): Observable<UserList> {
    return this.httpClient.get<UserList>(`${environment.apiUrl}users?page=${pageNumber}`);
  }

  public getUser(userId: number): Observable<SingleUserDetails> {
    return this.httpClient.get<SingleUserDetails>(`${environment.apiUrl}users/${userId}`);
  }

  public registerUser(userInput: UserRegistrationDetails): Promise<any> {
    return this.httpClient.post(`${environment.apiUrl}register`, userInput).pipe(take(1)).toPromise();
  }

  public createUser(userInput): Promise<any> {
    return this.httpClient.post(`${environment.apiUrl}users`, userInput).pipe(take(1)).toPromise();
  }

  public deleteUser(userId: number): Promise<any> {
    return this.httpClient.delete(`${environment.apiUrl}users/${userId}`).pipe(take(1)).toPromise();
  }

  public editUser(userId: number, userInput: UserCreationDetails): Promise<any> {
    return this.httpClient.put(`${environment.apiUrl}users/${userId}`, userInput).pipe(take(1)).toPromise();
  }
}
