import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http:HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiEncuestas = "api/Encuestas/";

  SaveEncuesta(Encuesta:any):Observable<any>{
    return this.http.post(this.Url + this.ApiEncuestas, Encuesta);
  }

  GetListEncuesta():Observable<any>{
    return this.http.get(this.Url + this.ApiEncuestas);
  }

  DeleteEncuesta(id:number):Observable<any>{
    return this.http.delete(this.Url + this.ApiEncuestas + id);
  }

  UpdateEncuesta(id:number):Observable<any>{
    return this.http.put(this.Url + this.ApiEncuestas, id);
  }
}