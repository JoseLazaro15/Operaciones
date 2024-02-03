import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  
  constructor() { }
  num1:number=0;
  num2:number=0;
  resultado:number=0;

  calcularmul(){
    this.resultado=this.num1*this.num2;
  }

  calcularrest(){
    this.resultado=this.num1-this.num2;
  }

  calcularsum(){
    this.resultado=this.num1+this.num2;
  }

  calculardiv(){
    this.resultado=this.num1/this.num2;
  }

  ngOnInit() {
  }

}