import { Country } from '../models/country';
import * as fromCountries from './country';
import * as fromQuery from './query';

export interface State {
  query: '';
  countries: Country[];
}

export const reducers = {
  query: fromQuery.reducer,
  countries: fromCountries.reducer
};

export const getQueryState = (state: State) => state.query;
export const getCountriesState = (state: State) => state.countries;
