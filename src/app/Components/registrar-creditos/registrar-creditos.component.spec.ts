import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCreditosComponent } from './registrar-creditos.component';

describe('RegistrarCreditosComponent', () => {
  let component: RegistrarCreditosComponent;
  let fixture: ComponentFixture<RegistrarCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarCreditosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
