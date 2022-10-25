export interface INomina {
  Nombre: string;
  IdRol: number;
  NumEmpleado: string;
  CantidadEntrega: number;
  Salario: number;
  TotalDias: number;
  TotalDespensa: number;
  Isr: number;
  DescuentoExedenteSalarial: number;
}

export class ClsNomina {
  Nombre: string='';
  IdRol: number = 0;
  NumEmpleado: string='';
  CantidadEntrega: number=0;
  Salario: number=0;
  TotalDias: number=0;
  TotalDespensa: number=0;
  Isr: number=0;
  DescuentoExedenteSalarial: number=0;
}
