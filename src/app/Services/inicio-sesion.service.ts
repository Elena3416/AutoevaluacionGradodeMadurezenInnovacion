import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  constructor(private http: HttpClient) { }

  login(user:any):Observable<any>{
    return this.http.post("https://localhost:44339/api/Usuarios", user);
  }
}
