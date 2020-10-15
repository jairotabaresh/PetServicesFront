import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Modelo/Usuario';
import { UsuarioService } from '../Service/usuario.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {

  public usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  public buscarUsuario(){

    this.usuarioService.buscarUsuario(this.usuario).subscribe((respuesta:String)=>{
      if (respuesta == null) {
        alert('Usuario no registrado o contraseña invalidad');

      }
    })
  }

}
