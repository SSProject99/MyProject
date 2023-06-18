import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private fetchDataURL = 'http://localhost/WatchXDatabase/WatchXDatabase/fetchDataWatchX.php';
  private insertDataURL = 'http://localhost/WatchXDatabase/WatchXDatabase/insertDataWatchX.php';
  private deleteDataURL = `http://localhost/WatchXDatabase/WatchXDatabase/deleteDataWatchX.php`;

  constructor(private http: HttpClient) { }

  private fetchedData: any;
  insertData(data: any) {
    return this.http.post(this.insertDataURL, data);
  }

  getData(): Observable<any> {
    this.fetchedData = this.http.get<any>(this.fetchDataURL)
    return this.http.get<any>(this.fetchDataURL);
  }

  deleteData(dataID: any) {
    console.log(dataID)
    const url = `${this.deleteDataURL}/${dataID}`;
    return this.http.delete<any>(url);
  }
}
