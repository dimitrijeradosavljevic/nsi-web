import { Injectable } from '@angular/core';
import { BaseApiService } from '../../_shared/services/base-api.service';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends BaseApiService {

  public fullText(term: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/api/full-text`)
      .pipe(catchError(response => this.handleError(response)));
  }

  public date(date: Date): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/api/date`)
      .pipe(catchError(response => this.handleError(response)));
  }

  public geo(geo: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/api/geo`)
      .pipe(catchError(response => this.handleError(response)));
  }
}
