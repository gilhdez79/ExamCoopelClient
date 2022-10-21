export class Empleados{
  id: number = 0;
  Nombre: string = '';
  NumeroEmpleado:string= '';
  IdRol:number =0;

}

export interface IEmpleado{
  id:number,
  Nombre: string,
  NumeroEmpleado:string,
  IdRol:number
}
