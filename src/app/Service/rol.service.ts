import { Injectable } from '@angular/core';
import { Rol } from '../Modelo/Rol';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RolService {

  private ruta = environment.baseUrl + '/rolController';
  constructor(private http: HttpClient) { }

  public listar(){
    return this.http.get<Rol[]>(this.ruta + '/listar');
  }
}
