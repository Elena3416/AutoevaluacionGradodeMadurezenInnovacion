import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiUsuario = "api/Usuarios";

  SaveUsuario(Usuario:any):Observable<any>{
    return this.http.post(this.Url + this.ApiUsuario, Usuario);
  }

  GetListUsuario():Observable<any>{
    return this.http.get(this.Url + this.ApiUsuario);
  }

  DeleteUsuario(id:number):Observable<any>{
    return this.http.delete(this.Url + this.ApiUsuario + id);
  }

  UpdateUsuario(id:number):Observable<any>{
    return this.http.put(this.Url + this.ApiUsuario, id);
  }
}