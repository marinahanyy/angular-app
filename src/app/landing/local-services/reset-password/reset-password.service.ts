import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResetPassword } from '../../constants/reset-password.models';


@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  private baseUrl: string = 'https://tarteeb-api.azurewebsites.net/api/Users';

  constructor(private http: HttpClient) {}

  sendResetPasswordLink(email: string) {
    return this.http.post<any>(
      `${this.baseUrl}/SendEmail/send-reset-email/${email}`,
      {}
    );
  }

  resetPassword(restPasswordObj: ResetPassword) {
    return this.http.post<any>(
      `${this.baseUrl}/ResetPassword/reset-password/`,
      restPasswordObj
    );
  }
}
