import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchResponse } from '../../../_shared/models/SearchResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationSearch } from '../../../_shared/models/LocationSearch';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit {

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
      lat: [0, Validators.required],
      lon: [0, Validators.required],
      distance: [0, Validators.required],
    });

    this.formActive = true;
  }

  search() {
    this.searchService.locationSearch(this.form.value as LocationSearch).subscribe(
      result => {
        this.result = result;
      }
    );
  }
}
