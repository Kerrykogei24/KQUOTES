import { state } from '@angular/animations';

export class Quote {
    id:number;
    author:string;
    state:string;
    user:string;
    // upVote:number;
    // downVote:number;

    constructor(id:number, author:string, state:string,user:string){
        this.id=id;
        this.author=author;
        this.state=state;
        this.user= user;
        // this.upVote=0;
        // this.downVote=0;
    }
}
