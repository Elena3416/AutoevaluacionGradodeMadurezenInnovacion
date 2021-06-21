import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { GiroI } from '../Interfaces/Giro.interface';

@Injectable({
  providedIn: 'root'
})
export class GiroService {

  constructor(private http: HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiGiros = "api/Giros/";

  GetListGiro(): Observable<any> {
     return this.http.get(this.Url + this.ApiGiros);
  }
}