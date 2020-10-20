import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../Modelo/Usuario';
import { UsuarioService } from '../Service/usuario.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})

export class IniciarsesionComponent implements OnInit {

  public usuario = new Usuario();
  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');
  public iniciosesionForm : FormGroup;
  public camposObligatorios = false;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.iniciosesionForm = new FormGroup({
      contrasena: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)])
    });

    if (this.idUsuario !== null ){
      this.router.navigate(['app']);
    }

   }

  ngOnInit(): void {
  }

  public Validar(){
    if (this.iniciosesionForm.valid){

      this.usuarioService.buscarUsuario(this.usuario).subscribe((respuesta:Usuario)=> {

      if (respuesta.correo !== this.usuario.correo){
        Swal.fire({
          title: 'Ha ocurrido un error',
          text: 'El usuario y/o la contraseña son incorrectos',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
       } else {
        Swal.fire({
          title: 'Bienvenido a PetSerivce',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });

        localStorage.setItem('Id', respuesta.id.toString());
        localStorage.setItem('Rol', respuesta.rol.nombre);
        this.router.navigate(['app']);
       }
    });
  } else{
    this.camposObligatorios = true;
    Swal.fire({
        title: 'No se pudo enviar los datos',
        text: 'Por favor revise que la información este correcta',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });
  }
  }

  public validarControles(nombreControl: string): boolean {
    return (this.iniciosesionForm.get(nombreControl).invalid);
  }


}
