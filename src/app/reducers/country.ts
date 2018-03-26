import * as country from '../actions/country';
import { Country } from '../models/country';
import { Action, ActionReducer } from '@ngrx/store';

export function reducer (state = [], action: country.SearchCountriesCompleteAction) {
  switch (action.type) {
    case country.SEARCH_COUNTRIES_COMPLETE: {
      const countries = action.payload;
      return countries;
    }
    default:
      return state;
  }
}
