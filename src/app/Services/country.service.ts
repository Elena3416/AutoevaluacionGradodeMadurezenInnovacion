import { Country } from "../Interfaces/countryInterface";
import { Municipio } from "./../Interfaces/municipiointerfaz";
import { HttpClient } from '@angular/common/http';
import { map, mergeMap} from "rxjs/operators";
import { Injectable } from '@angular/core';
import { from } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private urlCountry:string = "https://restcountries.eu/rest/v2/all";
  private urlMunicipio:string = "https://datos-abiertos.edomex.gob.mx/documentos/datosabiertos/inegi/municipios.json";

  constructor(private http:HttpClient) { }

  public GetCountries() {
    return this.http.get<Country[]>(this.urlCountry).pipe(
        mergeMap((countries:Country[])=>
          from((countries)).pipe(
            map((Country) => Country.name)
          )
        )
      );
  }

  public GetMunicipios(){
    return this.http.get<Municipio[]>(this.urlMunicipio).pipe(
      mergeMap((municipios:Municipio[]) => 
        from((municipios)).pipe(
          map((Municipio) => Municipio.nombre)
        )
      )
    );
  }
}