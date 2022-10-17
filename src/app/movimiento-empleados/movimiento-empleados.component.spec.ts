import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoEmpleadosComponent } from './movimiento-empleados.component';

describe('MovimientoEmpleadosComponent', () => {
  let component: MovimientoEmpleadosComponent;
  let fixture: ComponentFixture<MovimientoEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientoEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
