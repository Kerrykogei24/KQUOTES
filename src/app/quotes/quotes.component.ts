

import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'Eleanor Roosevelt','Learn from the mistakes of others. You cant live long enough to make them all yourself', ' Francian Mbugua', new Date(2020,11,1)),
    new Quote(2,'Willie Nelson ','Once you replace negative thoughts with positive ones, youll start having positive results.', ' Benard Akaka', new Date(2020,11,3)),   
    new Quote(3,' Charles Spurgeon ','It is not how much we have, but how much we enjoy, that makes happiness.', ' Cythia Oduol',new Date(2020,10,30)),    
    new Quote(4,'W.E.B. Du Bois ','The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become', ' Arnold Collins',new Date(2020,11,2)),
    new Quote(5,' Michael Scofield',' choose to have faith, because, without that, I have nothing… It’s the only thing that’s keeping me going', ' Philipia Eve' ,new Date(2020,10,3)),  
    new Quote(6,'Theodore Bagwell','We are captives of our own identities, living in prisons of our own creation.', ' Kerry Komar' ,new Date(2020,11,4))
  ];

  likes(index) {
    this.quotes[index].likes++;
  }
  unlikes(index) {
    this.quotes[index].unlikes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
