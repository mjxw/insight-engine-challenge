import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from './env';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(API_URL);
  }

}
