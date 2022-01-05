import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../../_shared/services/base-api.service';
import { Login } from '../../_shared/models/auth/Login';
import {Register} from "../../_shared/models/auth/Register";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApiService {

  login(login: Login): Observable<any> {

    return this.http.post(`${this.apiUrl}/api/auth/login`, login);
  }

  register(register: Register): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/api/accounts/register`, register);
  }
}
