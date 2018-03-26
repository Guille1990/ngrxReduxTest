import * as query from '../actions/query';
import { Action, ActionReducer } from '@ngrx/store';

export function reducer (state = '', action: query.SearchCountriesAction) {
  switch (action.type) {
    case query.SEARCH_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
}
