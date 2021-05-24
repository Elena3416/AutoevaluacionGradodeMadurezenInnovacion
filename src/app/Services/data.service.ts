import { HttpClient } from '@angular/common/http';
import { usuarioI } from '../Interfaces/UsuarioInterface';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlAPI:string = "https://localhost:44355/api/Usuarios";

  constructor(private http:HttpClient) { }

  GetAllUsuario():Observable<usuarioI[]>{
    return this.http.get<usuarioI[]>(this.urlAPI);
  }
}
