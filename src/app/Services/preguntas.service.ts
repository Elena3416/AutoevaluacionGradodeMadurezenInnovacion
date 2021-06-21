import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private http:HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiPregunta = "api/Preguntas";

  SavePregunta(Pregunta:any):Observable<any>{
    return this.http.post(this.Url + this.ApiPregunta, Pregunta);
  }
}