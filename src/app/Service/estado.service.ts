import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Estado } from '../Modelo/Estado';


@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private ruta = environment.baseUrl + '/estadoController';
  constructor(private http: HttpClient) { }

  public Lista() {
    return this.http.get<Estado[]>( this.ruta + '/listar');
 }
}
