import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../../_shared/services/base-api.service';
import { Login } from '../../_shared/models/auth/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApiService {

  login(login: Login): Observable<any> {

    return this.http.post(`${this.apiUrl}/api/auth/login`, login);
  }
}
