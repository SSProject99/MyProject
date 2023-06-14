import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private fetchDataURL = 'http://localhost/WatchXDatabase/WatchXDatabase/fetchDataWatchX.php';
  private insertDataURL = 'http://localhost/WatchXDatabase/WatchXDatabase/insertDataWatchX.php';

  constructor(private http: HttpClient) { }

  insertData(data: any) {
    return this.http.post(this.insertDataURL, data);
  }
  
  getData(): Observable<any> {
    return this.http.get<any>(this.fetchDataURL);
  }
}
