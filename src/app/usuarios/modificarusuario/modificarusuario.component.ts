import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificarusuario',
  templateUrl: './modificarusuario.component.html',
  styleUrls: ['./modificarusuario.component.css']
})
export class ModificarusuarioComponent implements OnInit {
  public usuario = new Usuario();
  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');

  constructor(private usuarioService: UsuarioService, private router: Router) {
    if (this.idUsuario === null ){
      this.router.navigate(['iniciosesion']);
    }

    if (this.idUsuario !== null && this.rol !== 'Administrador' ){
      this.router.navigate(['app']);
    }
   }

  ngOnInit(): void {
    this.Editar();
  }

  public Editar() {
    let id = localStorage.getItem("id");
    this.usuarioService.ListarPorId(+id)
      .subscribe(respuesta => {
        this.usuario = respuesta;
      });
  }

  public Actualizar(usuario: Usuario) {
    this.usuarioService.ActualizarUsuario(usuario)
      .subscribe(respuesta => {
        this.usuario = respuesta;
        Swal.fire(
          'Registro actualizado',
          '',
          'success'
        )
        this.router.navigate(["usuario"]);
    })
  }

}
