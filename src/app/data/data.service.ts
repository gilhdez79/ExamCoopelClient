import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Empleados } from '../models/IEmpleados';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postEmpleadoForm(empleado: Empleados ): Observable<Empleados>{

    return of(empleado);
  }
}
