import { Component, OnInit } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { DataService } from '../data/data.service';
import { ClsNomina, INomina } from '../models/INomina';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movimiento-empleados',
  templateUrl: './movimiento-empleados.component.html',
  styleUrls: ['./movimiento-empleados.component.css']
})
export class MovimientoEmpleadosComponent implements OnInit {

  dt:ClsNomina[]=[];

  dataSource: MatTableDataSource<ClsNomina> = new MatTableDataSource(this.dt);
  displayedColumns: string[] = ['nombre', 'idRol', 'numEmpleado', 'cantidadEntrega', 'salario', 'totalDias', 'totalDespensa', 'isr', 'descuentoExedenteSalarial'];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getListaNomina(10);
  }

  getListaNomina(numero: number){
    this.dataService.GetListNomina(numero).subscribe(
      // result => console.log('success', result["objReturn"]),
      // error=> console.log('error: ', error)
      {
        next: data => {
           let datos: ClsNomina[] = JSON.parse(JSON.stringify(data["objReturn"])) ;
          this.dataSource = new MatTableDataSource(datos);
          console.log(this.dataSource);
        },
        error: err=> console.log(err)
      }
    )

  }

}
