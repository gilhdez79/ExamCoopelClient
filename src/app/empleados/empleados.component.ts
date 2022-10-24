
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';
import { Empleados } from '../models/IEmpleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleadofrm:any;
  empleadoItem :  Empleados  ={
    id:-1,
    Nombre: "",
    NumeroEmpleado:"",
    IdRol:0

  }
  datoEmp: Empleados[] = [];
  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {

    this.empleadofrm = this.fb.group({
      id :[],
      nombre:['Samy',Validators.required],
      numeroEmpleado: ['00004',Validators.required],
      idRol: [0],
      frmRol: ['Samy',Validators.required],

    });
  }

  guardar(){
    console.log(this.empleadofrm);
    console.log('Saved: ', JSON.stringify(this.empleadofrm.value));

    this.empleadoItem.id = this.empleadofrm.get('id').value;
    this.empleadoItem.Nombre = this.empleadofrm.get('nombre').value;
    this.empleadoItem.NumeroEmpleado = this.empleadofrm.get('numeroEmpleado').value;
    this.empleadoItem.IdRol = this.empleadofrm.get('idRol').value;

    if (this.empleadofrm.valid) {
      this.dataService.postEmpleadoForm(this.empleadoItem).subscribe(
        result => console.log('success', result),
        error=> console.log('error: ', error)

      )
    }
  }

  getListaEmpleados(){
    this.dataService.GetListEmpleados2().subscribe(
      // result => console.log('success', result["objReturn"]),
      // error=> console.log('error: ', error)
      {
        next: data => {
           let datos: Array<Empleados> = JSON.parse(JSON.stringify(data)) ;
          this.datoEmp = datos;
          console.log(this.datoEmp);

        },
        error: err=> console.log(err)
      }
    )

  }



}
