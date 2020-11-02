
import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kQuotes';
  quotes:Quote[] = [
    {id:1, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself'},
    {id:2, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself'},
    {id:3, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself'},
    {id:4, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself'},
    {id:5, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself'},
    {id:6, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself'},

  ];
}

