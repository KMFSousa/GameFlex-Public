import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;

  constructor (private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000";
  }

  get (uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  
  getWithArgs (uri: string, optionalArgs: any = null) {
    return this.http.get(`${this.ROOT_URL}/${uri}`, optionalArgs);
  }

  post (uri: string, payload: Object, optionalArgs: Object = null) {
    // 2nd param is the body of the request
    console.log(`${this.ROOT_URL}/${uri}`)
    console.log(payload)
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload 
    // {
    //   reportProgress: true,
    //   observe: 'events'
    // }
    );
  }

  patch (uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete (uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}