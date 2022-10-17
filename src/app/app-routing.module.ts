import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MovimientoEmpleadosComponent } from './movimiento-empleados/movimiento-empleados.component';
import { NominaComponent } from './nomina/nomina.component';

const routes: Routes = [
{path:'', component:EmpleadosComponent},
{path:'empleados', component:EmpleadosComponent},
{path:'movimientos', component:MovimientoEmpleadosComponent},
{path:'nomina', component:NominaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
