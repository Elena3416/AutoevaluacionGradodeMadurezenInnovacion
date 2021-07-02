import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuestosService {

  constructor(private http: HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiPuestos = "api/Puestos/";

  GetListPuestos(): Observable<any> {
   return this.http.get(this.Url + this.ApiPuestos);
  }
}
