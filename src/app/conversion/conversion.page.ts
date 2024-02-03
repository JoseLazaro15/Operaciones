import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {

  constructor() { }
  Monto:number=0;
  Moneda:string="";
  valorActual:number=0;
  Resultado:number=0;

  calcularConversion(){
    switch(this.Moneda){
      case 'Dolares':
        this.valorActual=17.16;
        this.Resultado=this.valorActual*this.Monto;
        break;
      case 'Euros':
        this.valorActual=18.62;
        this.Resultado=this.valorActual*this.Monto;
        break;
      case 'Yen':
        this.valorActual=0.12;
        this.Resultado=this.valorActual*this.Monto;
        break;
      case 'Default':
        break;
    }
  }

  ngOnInit() {
  }

}
