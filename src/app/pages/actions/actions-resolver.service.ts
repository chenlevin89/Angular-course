import { Injectable } from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

const DATA = {
  name: 'TestUser'
}

@Injectable({
  providedIn: 'root'
})
export class ActionsResolverService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<any> | Promise<any> | any {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(DATA);
      }, 1000)
    });
  }
}
