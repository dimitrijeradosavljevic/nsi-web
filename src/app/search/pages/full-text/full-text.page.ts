import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import {SearchResponse} from '../../../_shared/models/SearchResponse';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FullTextSearch} from '../../../_shared/models/FullTextSearch';

@Component({
  selector: 'app-full-text',
  templateUrl: './full-text.page.html',
  styleUrls: ['./full-text.page.scss'],
})
export class FullTextPage implements OnInit {

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
      field: ['', Validators.required],
      value: ['', Validators.required]
    });

    this.formActive = true;
  }

  search() {
    this.searchService.fullText(this.form.value as FullTextSearch).subscribe(
      result => {
        this.result = result;
      }
    );
  }
}
