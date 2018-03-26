import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SearchCountriesAction } from '../../actions/query';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchText: FormControl;

  constructor(
    public store: Store<State>
  ) { }

  ngOnInit() {
    this.searchText = new FormControl('', [Validators.required]);
  }

  submit () {
    this.store.dispatch(new SearchCountriesAction(this.searchText.value));
  }

}
