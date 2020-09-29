import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loader$ = new Subject<boolean>();

  loaderStatus$ = this.loader$.asObservable();

  constructor() {}

  setLoaderStatus(status: boolean) {
    this.loader$.next(status);
  }
}
