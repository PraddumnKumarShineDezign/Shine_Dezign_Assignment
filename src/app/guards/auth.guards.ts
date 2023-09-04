import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router) {}
  data:boolean=true;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Check if the user is logged in
    if (localStorage.getItem('role') === 'ADMIN') {
      return true;
     this.router.navigate(['/admin-dashboard']);
    
    }
    // User is not logged in, redirect to login page
    this.router.navigate(['/user-dashboard']);
    return false;
  }
  }
  
