import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'Angular Node Project';

 ngOnDestroy(): void {
  console.log('App component destroyed');
     localStorage.clear();
 }


}
