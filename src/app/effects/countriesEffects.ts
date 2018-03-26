import { Injectable } from '@angular/core';
import { CountriesService as Service } from '../services/countries.service';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { SearchCountriesCompleteAction } from '../actions/country';
import { SearchCountriesAction } from '../actions/query';

import * as countries from '../actions/country';
import * as query from '../actions/query';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Injectable()
export class CountriesEffects {
  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(query.SEARCH_COUNTRIES)
    .map(action => (action as SearchCountriesAction).payload)
    .switchMap(action => {
      console.log(action);
      return this.service.get(action)
        .map(data => new SearchCountriesCompleteAction(data));
    });

  constructor(
    private service: Service,
    private actions$: Actions
  ) { }

}
