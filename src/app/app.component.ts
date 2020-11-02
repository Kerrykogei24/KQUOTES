// import { Quotes } from './quotes';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kQuotes';
  quotes:string[];

 constructor(){
  this.quotes=['anyday above ground is a blessing', 'jokers day out'];
 }
}

