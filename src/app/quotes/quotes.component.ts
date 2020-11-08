

import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl:'./quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'Eleanor Roosevelt','"Learn from the mistakes of others. You cant live long enough to make them all yourself."', ' Francian Mbugua', new Date(2020,11,1)),
    new Quote(2,'Willie Nelson ','"Once you replace negative thoughts with positive ones, youll start having positive results."', ' Benard Akaka', new Date(2020,11,3)),   
    new Quote(3,' Charles Spurgeon ','"It is not how much we have, but how much we enjoy, that makes happiness."', ' Cynthia Oduol',new Date(2020,10,30)),    
    new Quote(4,'W.E.B. Du Bois ','"The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become"', ' Arnold Collins', new Date(2020,11,2)),
    new Quote(5,' Michael Scofield','"Choose to have faith, because, without that, I have nothing… It’s the only thing that’s keeping me going"', ' Philipia Eve', new Date(2020,10,3)),  
    new Quote(6,'Theodore Bagwell','"We are captives of our own identities, living in prisons of our own creation."', ' Kerry Komar', new Date(2020,11,4))
  ];

  likes(index) {
    this.quotes[index].likes++;
  }
  unlikes(index) {
    this.quotes[index].unlikes++;
  }
  // isComplete=true;

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].state}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    quote.author = quote.author;
    quote.state = quote.state;
    quote.user = quote.user;
    this.quotes.push(quote)
  }


  best: number;
  author: string;
  user: string;
  quote: string;
  worst: number;
  postedon: Date;

  bestQuote() {
    this.best = 0;

    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].likes > this.best) {
        this.best = this.quotes[i].likes;
        this.author = this.quotes[i].author;
        this.user = this.quotes[i].user;
        this.quote = this.quotes[i].state;
        this. worst = this.quotes[i].unlikes;
        this.postedon = this.quotes[i].day;

      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
