import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  constructor(private http: HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiCluster = "api/Clusters/";

  GetListCluster(): Observable<any> {
     return this.http.get(this.Url + this.ApiCluster);
  }
}