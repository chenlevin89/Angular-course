import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService  {

  private loader$ = new Subject<boolean>();

  loaderStatus$ = this.loader$.asObservable();

  setLoaderStatus(status: boolean){
    this.loader$.next(status);
  }

}
