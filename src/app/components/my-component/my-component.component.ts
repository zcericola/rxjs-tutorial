import { Component, OnInit } from '@angular/core';
import { MyService } from '../../services/my-service.service';
import { skipWhile, map } from 'rxjs/operators';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.sass'],
})
export class MyComponentComponent implements OnInit {
  private apiData: any = {};
  public person: any = {};

  constructor(private myService: MyService) {}

  ngOnInit(): void {
    this.apiData = this.myService
      .getData()
      .pipe(skipWhile((res) => res === undefined))
      .subscribe((res) => {
        this.apiData = res;
        this._apiDataMapper();
        console.log('data: ', this.apiData);
      });
    //   .subscribe((data) => {
    //     this.apiData = data;
    //     this._apiDataMapper();
    //   });
  }

  private _apiDataMapper() {
    for (const key in this.apiData) {
      this.person[key] = this.apiData[key];
    }
  }
}
