import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.page.html',
  styleUrls: ['./promedio.page.scss'],
})
export class PromedioPage implements OnInit {

  constructor() { }

  Parcial1:number=0;
  Parcial2:number=0;
  Parcial3:number=0;
  Resultado:number=0;

  calcularprom(){
    this.Resultado=(this.Parcial1+this.Parcial2+this.Parcial3)/3;
  }

  ngOnInit() {
  }

}
