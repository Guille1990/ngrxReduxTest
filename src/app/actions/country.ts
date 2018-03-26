import { Action } from '@ngrx/store';
import { Country } from '../models/country';

export const SEARCH_COUNTRIES_COMPLETE = '[Countries] completed';

export class SearchCountriesCompleteAction implements Action {
  type = SEARCH_COUNTRIES_COMPLETE;

  constructor (public payload: Country[]) {}
}
