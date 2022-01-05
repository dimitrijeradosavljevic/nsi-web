import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-full-text',
  templateUrl: './full-text.page.html',
  styleUrls: ['./full-text.page.scss'],
})
export class FullTextPage implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() { }

}
