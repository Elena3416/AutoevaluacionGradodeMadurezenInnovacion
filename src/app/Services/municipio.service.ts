import { MunicipioI } from './../Interfaces/Municipios.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiMunicipio = "api/Municipios/";

  GetListMunicipio(): Observable<any> {
     return this.http.get(this.Url + this.ApiMunicipio);
  }
}