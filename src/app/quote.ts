import { state } from '@angular/animations';

export class Quote {
    id:number;
    author:string;
    state:string;
    user:string;
    day:Date;
    // upVote:number;
    // downVote:number;

    constructor(id:number, author:string, state:string,user:string, day:Date){
        this.id=id;
        this.author=author;
        this.state=state;
        this.user= user;
        this.day=day;
        // this.upVote=0;
        // this.downVote=0;
    }
}
