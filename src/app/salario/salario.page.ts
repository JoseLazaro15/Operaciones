import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.page.html',
  styleUrls: ['./salario.page.scss'],
})
export class SalarioPage implements OnInit {

  constructor() { }

  Horas:number=0;
  Categoria:string="";
  Salario:number=0;
  Subtotal:number=0;
  Total:number=0;

  calcularSalario(){
    switch(this.Categoria){
      case 'Ayudante':
        this.Salario=150;
        this.Subtotal=this.Horas*this.Salario;
        this.Total=this.Subtotal-(this.Subtotal*0.15);
        break;
      case 'Administrativo':
        this.Salario=250;
        this.Subtotal=this.Horas*this.Salario;
        this.Total=this.Subtotal-(this.Subtotal*0.20);
        break;
      case 'Directivo':
        this.Salario=867;
        this.Subtotal=this.Horas*this.Salario;
        this.Total=this.Subtotal-(this.Subtotal*0.30);
        break;
      case 'Gerente':
        this.Salario=430;
        this.Subtotal=this.Horas*this.Salario;
        this.Total=this.Subtotal-(this.Subtotal*0.23);
        break;
      case 'Default':
        break;
    }
  }

  ngOnInit() {
  }

}
