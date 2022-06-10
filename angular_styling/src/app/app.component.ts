import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label [class.danger]="foodWarning">Has food allergy.</label>
             <input type="checkbox" [(ngModel)]="foodWarning"/><br/>
             <label [class.makemegreen]="greenWarning">Make me green</label>
             <input type="checkbox" [(ngModel)]="greenWarning"/><br/>
             <p [ngClass]="myClasses"> class binding example</p><br/>
             <input type="checkbox" [(ngModel)]="doesNotExercise"(change)="adjustCSS()"/>Does not exercise.
             <input type="checkbox" [(ngModel)]="over55" (change)="adjustCSS()"/>Is over 55.
             <div *ngIf="doesNotExercise || over55" [ngClass]="myClasses">Is at risk of heart disease.</div><br/>
             <p [ngStyle]="myStyles"> style binding example</p><br/>
             <p [style.font-weight]="myWeight">style binding example</p><br/>
             <p [ngStyle]="myStyle"> style binding example</p>
              `,
  styles: [`
      /* .danger {
        color:orange;
        font-weight:bold;
      } */
      .makemegreen{
        color:green;
        font-weight:bold;
      }
      .warning{
        font-weight:bold;
      }
      .danger{
        color:red;
      }
      .highrisk{
        text-decoration:underline;
      }
      `
    ]
})
export class AppComponent {
  foodWarning:Boolean
  greenWarning:Boolean
  property1=true;
  property2=true;
  property3=true;
  doesNotExercise = false;
  over55 = false;
  myWeight = 'bold';
  color = 'blue';
  constructor() {
    this.foodWarning = false;
    this.greenWarning = false;
  }
  myClasses = {
    // warning:this.property1,
    // danger:this.property2,
    // highrisk:this.property3
    warning:false,
    danger:false
  }
  adjustCSS() {
    if(this.doesNotExercise == true && this.over55 == true){
      this.myClasses.warning = true;
      this.myClasses.danger = true;
    }
    else{
      this.myClasses.warning = false;
      this.myClasses.danger = false;
    }
  }

  myStyles = {
    'color': 'red',
    'font-weight': 'bold'
  }

  myStyle = {
    'font-weight': 'bold',
    'color': this.color
  }
}
