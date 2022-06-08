import { Component } from '@angular/core';


export class PlayingCard{
  cardVal!: string;
  suit!: string;
}

@Component({
  selector: 'app-root',
  template:`<h1>Hello world! {{title}}<br/>
            {{card.cardVal}} of {{card.suit}}<br/>
            {{card1.cardVal}} of {{card1.suit}}</h1>
            Card: <input [(ngModel)]="card.cardVal"><br/>
            Suit: <input [(ngModel)]="card.suit"><br/>
            <ul><li *ngFor="let card of cards">{{card.cardVal}}</li></ul>
            <table>
              <tr *ngFor="let card of cards">
                <td><ul><li>{{card.cardVal}}</li></ul></td>
                <td><ul><li>{{card.suit}}</li></ul></td>
            </table>
            <ul *ngFor="let item of firstNames; let i = index">
              <li>{{"Item " + i + ": " + item}}</li>
            </ul>
            <input [(ngModel)]="myinput">
            <input type='button' (click)=doSomething(myinput)><br/>
            {{myoutput}}<br/>
            <input [(ngModel)]="myinput1">
            <input type='button' (click)=doSomething1(myinput1)><br/>
            {{myoutput1}}<br/>
            <ul>
              <li *ngFor="let card of cards" (click)="onSelect(card)">
                {{card.cardVal}}
              </li>
            </ul>
            <div *ngIf="selectedCard">
              <h2>{{selectedCard.cardVal}} **</h2>
              <input [(ngModel)]="selectedCard.cardVal" placeholder="name">
            </div><br/>
            
            <section>
              Name:
              <form #myForm="ngForm">
                <input type="text" pattern="[a-zA-Z]*" minlength="3" required
                [(ngModel)]="myName" name="firstName" #firstName="ngModel">
                <div [hidden]="firstName.valid || firstName.pristine">
                  This control is invalid
                </div>
                <p *ngIf="firstName?.errors?.['required']">This field is required</p>
                <p *ngIf="firstName?.errors?.['pattern']">Only alphabetical characters are allowed</p>
                <p *ngIf="firstName?.errors?.['minlength']"> This entry must have at least three characters</p>
                <button type="submit" class="btn btn-default"
                [disabled]="!myForm.form.valid" (click)="onSubmit()">Submit</button>
              </form>

              Last Name:
              <form #myForm="ngForm">
                <input type="text" pattern="[a-zA-Z]*" minlength="2" required
                [(ngModel)]="myLastName" name="lastName" #lastName="ngModel">
                <div [hidden]="lastName.valid || lastName.pristine">
                  This control is invalid
                </div>
                <p *ngIf="lastName?.errors?.['required']">This field is required</p>
                <p *ngIf="lastName?.errors?.['pattern']">Only alphabetical characters are allowed</p>
                <p *ngIf="lastName?.errors?.['minlength']"> This entry must have at least three characters</p>
                <button type="submit" class="btn btn-default"
                [disabled]="!myForm.form.valid" (click)="onSubmit()">Submit</button>
              </form>
            </section>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw9_angular_basics';
  myinput = '';
  myoutput = '';
  myinput1 = '';
  myoutput1 = '';
  selectedCard!: PlayingCard;
  myName!: string;
  myLastName!: string;
  constructor(){
    this.myName = "frank";
    this.myLastName = "";
  }
  onSubmit(){
    alert(this.myName);
    alert(this.myLastName);
    alert(this.myName + " " +this.myLastName);
  }
  card: PlayingCard = {
    cardVal: "Ace",
    suit: "Spade"
  };
  card1: PlayingCard = {
    cardVal: "Queen",
    suit: "Diamonds"
  };
  cards: PlayingCard[] = [
    {cardVal: "Ace", suit: "Spades"},
    {cardVal: "Two", suit: "Clubs"},
    {cardVal: "Six", suit: "Hearts"},
  ];
  firstNames = ['Abe', 'Amy', 'Al'];
  doSomething(someContent: string){
    alert(someContent);
    this.myoutput = someContent;
  }
  doSomething1(someContent: string){
    alert(someContent);
    this.myoutput1 = someContent;
  }
  onSelect(card: PlayingCard){
    alert(card.suit);
    this.selectedCard = card;
  };
}
