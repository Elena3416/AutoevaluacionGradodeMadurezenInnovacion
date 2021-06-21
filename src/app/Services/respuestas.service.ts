import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  constructor(private http:HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiRespuestas = "api/Respuestas/";

  GetListRespuestas(): Observable<any> {
     return this.http.get(this.Url + this.ApiRespuestas);
  }
}
