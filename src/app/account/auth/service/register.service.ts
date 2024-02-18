import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { API_BASE_URL } from 'src/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${API_BASE_URL}/Accounts`;
  private userPayload: any;
  tokenDecode: any;

  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodeToken();
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/SignUp`, userData);
  }

  login(credentials: any): Observable<any> {
    const loginUrl = `${this.apiUrl}/login?email=${encodeURIComponent(credentials.email)}&password=${encodeURIComponent(credentials.password)}`;

    // Perform a GET request with credentials in the URL
    return this.http.get<any>(loginUrl);
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['signin']);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isAdmin(): boolean {
    // Retrieve the user role from the stored token and check if it's admin
    const userRole = this.getUserRole();
    return userRole === 'admin';
  }

  getUserRole(): string | null {
    const token = this.getToken();

    // if (token) {
    //   const decodedToken = this.decodeToken(token) as { role: string }; // Type assertion here
    //   return decodedToken?.role; // Assuming your token contains a 'role' claim
    // }

    return null;
  }


  decodeToken() {
    const token = this.getToken()!;
    console.log(token);

    if (!token) {
      return null;
    }

    return jwt_decode(token);
    // const jwtHelper = new JwtHelperService();
    // console.log(jwtHelper.decodeToken(token))
    // return jwtHelper.decodeToken(token)
  }

  getFullnameFormToken() {
    if (this.userPayload) {
      return this.userPayload.firstName;
    }
  }

  getRoleFormToken() {
    if (this.userPayload) {
      return this.userPayload.role;
    }
  }

  getUserId(): string {
    if (this.userPayload) {
      console.log(this.userPayload.userId);

      return this.userPayload.userId;
    }
    return '';
  }
}
