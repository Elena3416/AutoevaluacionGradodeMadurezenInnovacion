import { Country } from "./../Interface/country";
import { HttpClient } from '@angular/common/http';
import { map, mergeMap} from "rxjs/operators";
import { Injectable } from '@angular/core';
import { from } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url:string = "https://restcountries.eu/rest/v2/all";

  constructor(private http:HttpClient) { }

  public GethttpCountries() {
    return this.http
      .get(this.url)
      .pipe(
        mergeMap((countries: Country[]) =>
          from(countries).pipe(
            map((country) => country.name)
          )
        )
      );
  }
}