import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalarioPage } from './salario.page';

describe('SalarioPage', () => {
  let component: SalarioPage;
  let fixture: ComponentFixture<SalarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SalarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
