import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http: HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiEstados = "api/Estados_Mexico/";

  GetListEstado(): Observable<any> {
     return this.http.get(this.Url + this.ApiEstados);
  }
}