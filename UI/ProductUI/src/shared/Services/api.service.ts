import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  getRequest(url: any): Observable<any> {
    const path = this.baseUrl + url;
    return this.http.get(path);
  }

  deleteRequest(url: any): Observable<any> {
    const path = this.baseUrl + url;
    return this.http.delete(path);
  }

  postRequest(url: any, data: any): Observable<any> {
    const path = this.baseUrl + url;
    const body = JSON.stringify(data);
    return this.http.post(path, body, { headers: this.getHeaders() });
  }

  putRequest(url: any, data: any): Observable<any> {
    const path = this.baseUrl + url;
    const body = JSON.stringify(data);
    return this.http.patch(path, body, { headers: this.getHeaders() });
  }

  getHeaders(): any {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return headers;
  }
}
