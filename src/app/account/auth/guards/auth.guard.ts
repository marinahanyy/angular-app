import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import {AuthService} from "../../../landing/local-services/auth/auth.service";


@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService
  ) {}

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // this.toast.error({ detail: 'Error', summary: 'Please Login First' });
      this.router.navigate(['signin']);
      return false;
    }
  }
}
