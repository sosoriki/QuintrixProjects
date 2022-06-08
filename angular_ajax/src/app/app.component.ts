import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template:`
  //           <button (click)="getSomeData()">Test GET Request</button>
  //           <ul>
  //             <li *ngFor="let myData of namesArray">{{myData.first}} {{myData.last}}</li>
  //           </ul>
            
  //           <h3>Please enter the customer information</h3>
  //           <child [callParent]="parentFuncRef" [city]="operations"></child>
  //           {{dataFromChild}}`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello";
  namesArray!: Array<any>;
  _http:HttpClient;
  constructor(private http: HttpClient){
    this._http = http;
  }
  getSomeData(){
    this._http.get<any>('./assets/test.json')
    .subscribe(result => {
      this.namesArray = result;
    },
    error =>{
      alert(error);
      console.error(error);
    })
  }

  parentFuncRef!: Function;
  operations!: string;
  dataFromChild!: string;

  public ngOnInit(){
    this.parentFuncRef = this.myCallBackFunction.bind(this);
  }

  public myCallBackFunction(streetAddress: string, city: string, region: string){
    this.dataFromChild =
          "Street Address: " + streetAddress + " " + "Region: " + region + " " +
          "City: " + city;
  }

  myMouseEnter(){
    console.log("Mouse Entered!");
  }

  myKeyDown(event: any){
    console.log(event);
    console.log(event.key);
  }

  myKeyUp(event: any){
    console.log(event);
    console.log(event.key);
  }

  myFocusEvent(description: any){
    console.log(description)
  }

  myContent = "";
  myPastedContent = "";
  cutContent = "";

  cutEvent(content: any){
    this.cutContent = content;
    console.log(content);
  }
  pasteContent(content: any){
    console.log(this.cutContent);
    content = '';
  }

  myMouseHandler(event: any, description: any){
    console.log(description + "X: "
                + event.screenX.toString()
                + " Y: " + event.screenY.toString());
  }
}
