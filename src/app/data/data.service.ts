import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Empleados,IEmpleado } from '../models/IEmpleados';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { apiSettings } from '../core/ApiSettings';
import { EMPTY_OBSERVER } from 'rxjs/internal/Subscriber';

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

  GetListEmpleados(): Observable<any>{
  return this.http.get(`${apiSettings.URLAPI}${apiSettings.CTRLEMPLEADO}`);
  }
}
