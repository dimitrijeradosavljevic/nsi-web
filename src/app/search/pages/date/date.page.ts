import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchResponse } from '../../../_shared/models/SearchResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateSearch } from '../../../_shared/models/DateSearch';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {


  result: SearchResponse = undefined;
  form: FormGroup;
  formActive = false;

  constructor(private formBuilder: FormBuilder,
              private searchService: SearchService) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      column: ['', Validators.required],
      start: [null, Validators.required],
      end: [null, Validators.required],
    });

    this.formActive = true;
  }

  search() {
    this.searchService.dateSearch(this.form.value as DateSearch).subscribe(
      result => {
        this.result = result;
      }
    );
  }
}
