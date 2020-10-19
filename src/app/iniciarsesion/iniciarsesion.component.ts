import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { Usuario } from '../Modelo/Usuario';
import { UsuarioService } from '../Service/usuario.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})

export class IniciarsesionComponent implements OnInit {

  public usuario = new Usuario();
  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');

  constructor(private usuarioService: UsuarioService,
              private router: Router) {
                if (this.idUsuario !== null ){
                  this.router.navigate(['app']);
                }
               }

  ngOnInit(): void {
  }

  public Validar(): void{
    this.usuarioService.buscarUsuario(this.usuario).subscribe((respuesta: Usuario) => {
      if (respuesta !== null || respuesta !== undefined ) {
        Swal.fire({
          title: 'Bienvenido a PetSerivce',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });

        localStorage.setItem('Id', respuesta.id.toString());
        localStorage.setItem('Rol', respuesta.rol.nombre);
        this.router.navigate(['app']);
      } else {
        Swal.fire({
          title: 'Ha ocurrido un error',
          text: 'El usuario y/o la contraseña son incorrectos',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }, err => {
      Swal.fire({
        title: 'No se pudo conectar al servidor',
        text: 'Por favor vuelve a intentarlo más tarde',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
  }
}
