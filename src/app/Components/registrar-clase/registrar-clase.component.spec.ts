import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarClaseComponent } from './registrar-clase.component';

describe('RegistrarClaseComponent', () => {
  let component: RegistrarClaseComponent;
  let fixture: ComponentFixture<RegistrarClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarClaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
