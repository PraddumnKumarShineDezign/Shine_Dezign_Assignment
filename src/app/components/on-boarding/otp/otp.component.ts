import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent  implements OnInit{
  title = 'otp';
  // id !:string;
  id!: string;
  userId!: any;
  form: FormGroup;
  formInput = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
  @ViewChildren('formRow') rows: any;
  

  ngOnInit() {
    // this.authService.userIdSubject.subscribe(userId => {
    //   this.id = userId ;
    //   console.log("userIDDDD", this.id);
    // });
  }

  constructor(private apiService : ApiService,private router : Router,private authService:AuthService) {
    this.form = this.toFormGroup(this.formInput);
  }

  toFormGroup(elements: string[]) {
    const group: any = {};

    elements.forEach(key => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  keyUpEvent(event: KeyboardEvent, index: number) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1 ;
    } else {
      pos = index + 1 ;
    }
    if (pos > -1 && pos < this.formInput.length ) {
      this.rows._results[pos].nativeElement.focus();
    }

  }

  onSubmit() {
    const otpValues = this.formInput.map(input => this.form.get(input)?.value).join('');
  const otpAsNumber = parseInt(otpValues, 10);
  console.log("otp", otpAsNumber);
  // const _id = this.id ?? '';
  this.authService.userIdSubject.subscribe(_id=>{
    console.log("ObservableVal",_id)
    this.userId=_id;
  })
    this.apiService.otp( {otp: otpAsNumber, id: this.userId} ).subscribe(
      (response) => {
        console.log("otp response", response);
        this.router.navigate(['/login']);
      }
    );
  }
}
