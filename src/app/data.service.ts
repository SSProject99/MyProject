import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private fetchDataURL = 'http://localhost/AngularJSDatabase/AngularJSDatabase/fetchData.php';
  private insertDataURL = 'http://localhost/AngularJSDatabase/AngularJSDatabase/insertData.php';

  constructor(private http: HttpClient) { }

  insertData(data: any) {
    return this.http.post(this.insertDataURL, data);
  }
  
  getData(): Observable<any> {
    return this.http.get<any>(this.fetchDataURL);
  }
}
