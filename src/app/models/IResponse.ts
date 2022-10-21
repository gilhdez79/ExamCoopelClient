export interface IResponse{
  success: Boolean,
  infoMensaje: InfoMensaje ,
  objReturn: ObjReturn

}

export interface ObjReturn{
  id: number,
  nombre: string,
  numeroEmpleado: string,
  tbMovimientosEmpleados: []
}

export interface InfoMensaje{
  message: string,
  tipoMensaje: number
}


export class Response implements IResponse{


  constructor(public success: Boolean,
    public infoMensaje:InfoMensaje, public objReturn: ObjReturn){

  }
}
