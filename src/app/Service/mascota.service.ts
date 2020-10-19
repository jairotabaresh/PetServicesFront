import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Mascota } from '../Modelo/Mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private ruta = environment.baseUrl + '/mascotaController';

  constructor(private http: HttpClient) { }

  public Listar () {
    return this.http.get<Mascota[]> (this.ruta + '/listar');
  }

  public agregar (mascota: Mascota) {
    return this.http.post<boolean> (this.ruta + '/crear', mascota);
  }

  public buscarPorId (id: String) {
    return this.http.get<Mascota> (this.ruta + '/obtener/' + id);
  }
  public listarPorUsuario(idUsuario: number){
    return this.http.get<Mascota[]> (this.ruta + '/listarPorUsuario' + '/' + idUsuario);
  }
}
