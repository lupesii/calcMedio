import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  n1:any;
  n2:number;
  op:number;
  constructor() {
    this.n2 = 0;
    this.op = 0;
  }

  somar(){
    this.op = 1;
    this.n2 = this.n1;
    this.n1 = " ";
  }
  subtrair(){
    this.op = 2;
    this.n2 = this.n1;
    this.n1 = " ";
  }
  multiplicar(){
    this.op = 3;
    this.n2 = this.n1;
    this.n1 = " ";
  }
  dividir(){
    this.op = 4;
    this.n2 = this.n1;
    this.n1 = " ";
  }
  igual(){
    if(this.op === 1){
      this.n1 = this.n1 + this.n2;
    }
    if(this.op === 2){
      this.n1 = this.n1 - this.n2;
    }
    if(this.op === 3){
      this.n1 = this.n1 * this.n2;
    }
    if(this.op === 4){
      this.n1 = this.n1 / this.n2;
    }
  }
}
