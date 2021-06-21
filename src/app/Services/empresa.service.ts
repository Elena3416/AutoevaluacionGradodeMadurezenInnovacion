import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http:HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiEmpresas = "api/Empresas/";

  SaveEmpresa(Empresa:any):Observable<any>{
    return this.http.post(this.Url + this.ApiEmpresas, Empresa);
  }

  GetListEmpresa():Observable<any>{
    return this.http.get(this.Url + this.ApiEmpresas);
  }

  GetIdEmpresa(id:number):Observable<any>{
    return this.http.get(this.Url + this.ApiEmpresas + id);
  }

  DeleteEmpresa(id:number):Observable<any>{
    return this.http.delete(this.Url + this.ApiEmpresas + id);
  }

  UpdateEmpresa(id:number):Observable<any>{
    return this.http.put(this.Url + this.ApiEmpresas, id);
  }
}