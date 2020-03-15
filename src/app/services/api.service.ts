import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getUrl = 'http://127.0.0.1:3030/cities';
  selectionUrl = 'http://127.0.0.1:3030/preferences/cities';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.getUrl);
  }

  setSelection($event) {
    return this.http.patch(this.selectionUrl, $event)
  
  }


  getSelection() {
    return this.http.get(this.selectionUrl).subscribe(response => console.log('new selection:', response));
  }

  getCityInfo(id){
    return this.http.get(this.getUrl+'/'+id);

  }

}
