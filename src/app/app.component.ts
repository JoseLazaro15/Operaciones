import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Calculadora', url: '/calculadora', icon: 'mail' },
    { title: 'Salario', url: '/salario', icon: 'paper-plane' },
    { title: 'Area', url: '/area', icon: 'paper-plane' },
    { title: 'Promedio', url: '/promedio', icon: 'paper-plane' },
    { title: 'Conversion', url: '/conversion', icon: 'paper-plane' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
