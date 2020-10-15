import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Servicio } from '../Modelo/Servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private ruta = environment.baseUrl + '/estadoController';
  constructor(private http: HttpClient) { }

  public Lista() {
    return this.http.get<Servicio[]>( this.ruta + '/listar');
 }
}
