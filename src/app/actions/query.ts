import { Action } from '@ngrx/store';

export const SEARCH_COUNTRIES = '[Countries] search';

export class SearchCountriesAction implements Action {
  type = SEARCH_COUNTRIES;

  constructor (public payload: string) {}
}
