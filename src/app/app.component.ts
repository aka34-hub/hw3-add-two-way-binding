import { Component } from '@angular/core';
import { Products} from './products';
type Prod={
  'id':number,
  'name':string,
  'price':number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*
  title = 'my-prjct';
  n:number=1000;
  pathimage:string="img/corolla.png"
  wimg:number=50;
  himg:number=50;
  url:string="https://google.com";
  products:Products={
    'id':1,
    'name':'PC Computer',
    'price':2000
  }

  ch:boolean=true;
  */



  //Practice 14

  himg:number=60; //for img height
  wimg:number=60; //for img width

  x:number=0;
  y:number=0;
  z:number=0;

add=()=>
  {
    this.z=Number(this.x)+Number(this.y)
  }
}
