import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  public canDeactivate(component: CanComponentDeactivate): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const canDeactivateComponent: Observable<boolean> | Promise<boolean> | boolean = component.canDeactivate ? component.canDeactivate() : true;
    return canDeactivateComponent;
  }

}
