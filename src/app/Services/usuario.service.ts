import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioI } from '../Interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiUsuario = "api/Usuarios/";

  SaveUsuario(Usuario:any):Observable<any>{
    return this.http.post(this.Url + this.ApiUsuario, Usuario);
  }

  GetListUsuario():Observable<any>{
    return this.http.get(this.Url + this.ApiUsuario);
  }

  GetOneUser(id:number):Observable<UsuarioI>{
    return this.http.get<UsuarioI>(this.Url + this.ApiUsuario + id);
  }

  DeleteUsuario(id:number):Observable<any>{
    return this.http.delete<any>(this.Url + this.ApiUsuario + id);
  }

  UpdateUsuario(id:number, usuario:any):Observable<any>{
    return this.http.put<any>(this.Url + this.ApiUsuario, id, usuario);
  }
}