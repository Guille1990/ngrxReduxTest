import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/country';

const URL_BASE = 'https://restcountries.eu/rest/v2/name/';

@Injectable()
export class CountriesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get (query): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${URL_BASE}${query}`);
  }
}
