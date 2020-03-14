import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  configUrl = 'http://127.0.0.1:3030/cities';
  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get(this.configUrl);
  }
}
