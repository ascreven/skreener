import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter();
  searchForm = new FormGroup({
    searchQuery: new FormControl('', Validators.required)
  });
  query: string = '';

  constructor(  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.query = this.searchForm.get("searchQuery").value;
    if (this.query) {
      this.searchEvent.emit(this.query);
    }
  }
}
