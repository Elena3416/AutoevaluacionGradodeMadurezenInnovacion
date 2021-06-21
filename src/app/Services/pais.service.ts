import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { PaisI } from '../Interfaces/Pais.interface';
import { mergeMap, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiPais = "api/Pais/";

  GetListPais(): Observable<any> {
     return this.http.get(this.Url + this.ApiPais);
  }
}