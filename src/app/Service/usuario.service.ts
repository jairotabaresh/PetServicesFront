import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../Modelo/Usuario';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private ruta = environment.baseUrl + '/usuarioController';
  constructor(private http: HttpClient) { }

  public Listar(){
    return this.http.get<Usuario[]>( this.ruta + '/listar');
  }

  public Crear(usuario: Usuario){
    return this.http.post<boolean>(this.ruta + '/crear', usuario);
  }

  public buscarUsuario(usuario: Usuario){
    return this.http.post<Usuario>(this.ruta + '/iniciosesion', usuario);
  }

  public ListarPorId(id: number) {
    return this.http.get<Usuario>(this.ruta + "/editar/" + id);
  }

  public ActualizarUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(this.ruta + "/editar/" + usuario.id, usuario);
  }

  public ValidarCorreo(usuario: Usuario) {
    return this.http.post<boolean>(this.ruta + "/validarCorreo/", usuario);
  }
}
