import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[
    SidebarComponent,ReactiveFormsModule
  ]
})
export class SharedModule { 
  constructor(){console.log("Shared Module Loaded........")}
}
