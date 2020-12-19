import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class IsUserValidGuard implements CanActivate {
  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router
    ) {}
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.usersService.getUser(route.params.id).pipe(
      map(userInfo => {
        if (userInfo && userInfo.data && userInfo.data.id) {
          return true;
        }
        this.router.navigate(['/users']);
        return false;
      })
    );
  }
}
