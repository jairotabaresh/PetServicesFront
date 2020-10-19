import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cita } from '../Modelo/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private ruta = environment.baseUrl + '/citaController';
  constructor(private http: HttpClient) { }

  public Lista() {
     return this.http.get<Cita[]>( this.ruta + '/listar');
  }

  public Crear(cita: Cita){
    return this.http.post<boolean>(this.ruta + '/crear', cita);
  }

  public buscarPorId (id: number) {
    return this.http.get<Cita> (this.ruta + '/obtener/' + id);
  }

  public listarPorUsuario(idUsuario: number){
    return this.http.get<Cita[]> (this.ruta + '/listarPorUsuario' + '/' + idUsuario);
  }
}
