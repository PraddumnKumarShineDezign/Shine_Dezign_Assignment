import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private userService :UserServiceService){}
  ngOnInit():void{this.userService.allProd(1, 10).subscribe((res: any) => {
    // Handle the response data here
    console.log(res);
  });
}
}
