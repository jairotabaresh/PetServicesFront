import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
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
  public usuarioEditForm: FormGroup;
  public camposObligatorios = false;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.usuarioEditForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      correo: new FormControl(''),
      direccion: new FormControl(''),
    });
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
    if (this.usuarioEditForm.valid) {
      this.usuarioService.ActualizarUsuario(usuario).subscribe(respuesta => {
        if (respuesta) {
          this.usuario = respuesta;
          Swal.fire(
            'Registro actualizado',
            '',
            'success'
          )
          this.router.navigate(["usuario"]);
        }
      }, err => {
        Swal.fire(
          'Lo siento',
          'Algo salió mal',
          'error'
        )
        console.log("Error");
      });
    } else {
      this.camposObligatorios = true;
      Swal.fire(
        'No se pudo enviar los datos',
        'Por favor revise que la información este correcta',
        'error',
      )
    }
  }

  public validarControles(nombreControl: string): boolean {
    return (this.usuarioEditForm.get(nombreControl).invalid);
  }

}
