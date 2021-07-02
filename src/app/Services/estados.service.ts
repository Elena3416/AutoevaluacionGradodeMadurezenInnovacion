import { EstadosMexicoI } from './../Interfaces/EstadosMexico.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http: HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiEstados = "api/Estados_Mexico/";

  GetListEstado():Observable<any> {
     return this.http.get(this.Url + this.ApiEstados);
  }
}