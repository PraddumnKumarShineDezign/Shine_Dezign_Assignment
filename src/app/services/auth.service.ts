import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userIdSubject = new BehaviorSubject<string | null>(null);

//   setUserId(userId: string) {
//     console.log("ServiceUserId",userId);
//     this.userIdSubject.next(userId);
//   }
  
  getUserId() {
    return this.userIdSubject.asObservable();
  }
}
