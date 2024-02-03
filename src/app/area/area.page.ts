import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.page.html',
  styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {

  constructor() { }

  Base:number=0;
  Altura:number=0;
  Resultado:number=0;
  Figura:string="";

  calcularArea(){
  if (this.Figura.valueOf()=="Triangulo") {
    this.Resultado=(this.Base*this.Altura)/2
  }else if(this.Figura.valueOf()=="Cuadrado"){
    this.Resultado=this.Altura*this.Base
  }else{
    this.Resultado=this.Altura*this.Base
  }

  }
  ngOnInit() {
  }

}
