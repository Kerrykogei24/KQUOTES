

import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'Nelson Mandela','Learn from the mistakes of others. You cant live long enough to make them all yourself', ' joker'),
    new Quote(1,'Nelson Mandela','Learn from the mistakes of others. You cant live long enough to make them all yourself', ' joker'),   
    new Quote(1,'Nelson Mandela','Learn from the mistakes of others. You cant live long enough to make them all yourself', ' joker'),    
    new Quote(1,'Nelson Mandela','Learn from the mistakes of others. You cant live long enough to make them all yourself', ' joker'),
    new Quote(1,'Nelson Mandela','Learn from the mistakes of others. You cant live long enough to make them all yourself', ' joker'),  
    new Quote(1,'Nelson Mandela','Learn from the mistakes of others. You cant live long enough to make them all yourself', ' joker')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
