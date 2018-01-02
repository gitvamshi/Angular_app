import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  // getServers() {
  //   return this.http.get('https://udemy-ng-http.firebaseio.com/data')
  //     .map(
  //       (response: Response) => {
  //         const data = response.json();
  //         for (const server of data) {
  //           server.name = 'FETCHED_' + server.name;
  //         }
  //         return data;
  //       }
  //     );
  // }
  getServers(url) {
    return this.http.get(url)
      .map(
        (response: Response) => {
          console.log(response);
          return response.json();
        }
      )
        .catch(
          (error: Response) => {
            return Observable.throw('Something went wrong');
          }
      );
  }
}
