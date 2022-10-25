import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';
import { Empleados,IEmpleado } from '../models/IEmpleados';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { apiSettings } from '../core/ApiSettings';
import { EMPTY_OBSERVER } from 'rxjs/internal/Subscriber';
import { IResponse, Response, ObjReturn } from '../models/IResponse';
import { Action } from 'rxjs/internal/scheduler/Action';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlAPI:string = 'https://localhost:44300/';
  constructor(  private http:HttpClient) {
  }

  postEmpleadoForm(empleado: Empleados ): Observable<any>{
    const httpOptions : any    = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
      })
    };

    let json= JSON.stringify(empleado);
  // Crear variable params con el usuario en json
    let params =  json;
    return this.http.post(apiSettings.URLAPI + apiSettings.CTRLEMPLEADO, params, httpOptions);
  }

  GetEmpleadoFormxId(id:number ): Observable<any>{
    const httpOptions : any    = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
      })
    };
  return this.http.get(`${apiSettings.URLAPI}${apiSettings.CTRLEMPLEADO}${"/obtenerEmpleado"}${id}`,  httpOptions);
  }

  GetListEmpleados(): Observable<ObjReturn>{
  return this.http.get<IResponse>(`${apiSettings.URLAPI}${apiSettings.CTRLEMPLEADO}`)
  .pipe(map ((resp: IResponse) => resp.objReturn));
  }

  GetListEmpleados2(): Observable<any>{

  let Datos : Empleados[];
  return   this.http.get<ObjReturn>(`${apiSettings.URLAPI}${apiSettings.CTRLEMPLEADO}`)
    .pipe(
      map(
        (response) => ( {
            id: response.id,
            Nombre: response.nombre,
            NumeroEmpleado : response.numeroEmpleado,

        })
      )
    );
  }

  GetListNomina(numMes: number): Observable<any>{

    let Datos : Empleados[];
     return   this.http.get<ObjReturn>(`${apiSettings.URLAPI}${apiSettings.CTRLNOMINA}/obtenerNomina/${numMes}`)
    .pipe(
      map(resp =>resp )
    );

  }

}
