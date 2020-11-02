

import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself',user: ' joker'},
    {id:2, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself',user: '  joker'},
    {id:3, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself',user: ' joker'},
    {id:4, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself',user: '  joker'},
    {id:5, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself',user: ' joker'},
    {id:6, author:'Nelson Mandela',state:'Learn from the mistakes of others. You cant live long enough to make them all yourself',user: ' joker'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
