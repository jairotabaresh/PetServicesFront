import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Modelo/Usuario';
import { Rol } from '../../Modelo/Rol';
import { RolService } from '../../Service/rol.service';
import { UsuarioService } from '../../Service/usuario.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})

export class CrearusuarioComponent implements OnInit {
  public usuario = new Usuario();
  public roles: Rol[];

  constructor(private rolService: RolService,
    private usuarioService: UsuarioService) {
    this.listarRol();
    this.usuario.rol = new Rol();
  }

  ngOnInit(): void {
  }

  public listarRol() {
    this.rolService.listar().subscribe((respuesta: Rol[]) => {
      this.roles = respuesta;
    }, err => {
      this.roles = new Array();
    });

  }

  public Guardar() {
    if (this.validarDatos(this.usuario.correo)) {
      this.usuarioService.Crear(this.usuario).subscribe((respuesta: boolean) => {
        if (respuesta) {
          Swal.fire(
            'Usuario creado',
            '',
            'success'
          ).then(() => {
            window.location.reload();
          })
        }
      }, err => {
        Swal.fire(
          'Lo siento',
          'Algo salió mal',
          'error'
        )
        console.log("Error");
      });
    }
    else { 
      Swal.fire(
        'Formato email',
        'Incorrecto',
        'error'
      )
    }

  }

  public validarDatos(email: String): boolean {

    let mailValido = false;
    'use strict';

    var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(EMAIL_REGEX)) {
      mailValido = true;
    }
    return mailValido;
  }
}
