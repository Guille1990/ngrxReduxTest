import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/';
import { Observable } from 'rxjs/Observable';
import { Country } from '../../models/country';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public countries$: Observable<Country[]>;
  public countries: Country[];

  constructor(
    public store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.countries$ = this.store.select(fromRoot.getCountriesState);

    this.countries$.subscribe(
      data => {
        this.countries = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
