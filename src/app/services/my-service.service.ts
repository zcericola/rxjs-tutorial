import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, skipWhile } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  //   private dataBehaviorSub = new BehaviorSubject<any>(undefined);
  //   private data$ = this.dataBehaviorSub.asObservable();
  private data$ = new BehaviorSubject<any>(undefined).asObservable();

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    console.log('call made in service');
    const swapiURL = 'https://swapi.dev/api/people/1';
    const localURL = 'assets/swapi.json';
    this.data$ = this.http.get(localURL);
    //   .pipe(skipWhile((res) => res === undefined));
    //   .subscribe((res) => {
    //     this.dataBehaviorSub.next(res);
    //   });
    return this.data$;
  }
}
