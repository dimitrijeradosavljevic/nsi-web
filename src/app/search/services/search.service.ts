import { Injectable } from '@angular/core';
import { BaseApiService } from '../../_shared/services/base-api.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocationSearch } from '../../_shared/models/LocationSearch';
import { SearchResponse } from '../../_shared/models/SearchResponse';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { DateSearch } from '../../_shared/models/DateSearch';
import { FullTextSearch } from '../../_shared/models/FullTextSearch';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends BaseApiService {

  randomness = 'randomness';

  public fullText(fullTextSearch: FullTextSearch): Observable<SearchResponse> {


    let params = new HttpParams();
    params = params.set('field', fullTextSearch.field);
    params = params.set('value', fullTextSearch.value);

    const httpOptions = {
      headers: this.getAuthData(),
      params
    };

    return this.http.get<SearchResponse>(this.apiUrl + `/${this.randomness}/text-search`, httpOptions)
      .pipe(catchError(response => this.handleError(response)));
  }

  public dateSearch(dateSearch: DateSearch): Observable<SearchResponse> {

    let params = new HttpParams();
    params = params.set('column', dateSearch.column);
    params = params.set('start',  dateSearch.start);
    params = params.set('end',    dateSearch.end);


    const httpOptions = {
      headers: this.getAuthData(),
      params
    };

    return this.http.get<SearchResponse>(this.apiUrl + `/${this.randomness}/date-search`, httpOptions)
      .pipe(catchError(response => this.handleError(response)));
  }

  public locationSearch(locationSearch: LocationSearch): Observable<SearchResponse> {

    let params = new HttpParams();
    params = params.set('lat',      locationSearch.lat);
    params = params.set('lon',      locationSearch.lon);
    params = params.set('distance', locationSearch.distance);

    const httpOptions = {
      headers: this.getAuthData(),
      params
    };

    return this.http.get<SearchResponse>(this.apiUrl + `/${this.randomness}/location-search`, httpOptions)
      .pipe(catchError(response => this.handleError(response)));
  }

  private getAuthData() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    const headersObject = new HttpHeaders();
    headersObject.append('Content-Type', 'application/json');
    headersObject.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

    return headersObject;
  }
}
