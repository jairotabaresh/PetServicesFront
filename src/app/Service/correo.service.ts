import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Correo } from '../Modelo/Correo';


@Injectable({
  providedIn: 'root'
})

export class CorreoService {

  private ruta = environment.baseUrl + '/contactoController';
  constructor(private http: HttpClient) { }

  public Enviar(correo: Correo){

    return this.http.post<boolean>(this.ruta + '/enviar', correo);
  }

  public Recuperar(correo: Correo){

    return this.http.post<boolean>(this.ruta + '/recuperar', correo);
  }

  public CrearCorreo(correo: Correo){
    return this.http.post<boolean>(this.ruta + '/crearCorreo', correo);
  }
}
