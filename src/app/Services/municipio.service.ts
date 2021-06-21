import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  private Url = "https://localhost:44339/";
  private ApiMunicipio = "api/Municipios/";

  GetListMunicipio(): Observable<any> {
     return this.http.get(this.Url + this.ApiMunicipio);
  }
}