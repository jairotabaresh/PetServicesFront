import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Modelo/Usuario';
import { Rol } from '../../Modelo/Rol';
import { RolService } from '../../Service/rol.service';
import { UsuarioService } from '../../Service/usuario.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';
import { CorreoService } from 'src/app/Service/correo.service';



@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})

export class CrearusuarioComponent implements OnInit {
  public usuario = new Usuario();
  public roles: Rol[];
  public usuarioForm: FormGroup;
  public camposObligatorios = false;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private rolService: RolService,
    private usuarioService: UsuarioService,
    private correoService: CorreoService) {
    this.listarRol();
    this.usuario.rol = new Rol();

    this.usuarioForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      direccion: new FormControl(''),
      rol: new FormControl('', Validators.required)
    });
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

  public Validar() {
    if (this.usuarioForm.valid) {
      this.usuarioService.ValidarCorreo(this.usuario).subscribe((respuestaCorreo: boolean) => {
        if (respuestaCorreo) {
          Swal.fire(
            'Lo siento',
            'El correo ingresado ya existe',
            'error'
          )
        } else {
          this.Guardar();
        }
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

  public Guardar() {
    this.usuarioService.Crear(this.usuario).subscribe((respuesta: boolean) => {
      if (respuesta) {
        Swal.fire(
          'Usuario creado',
          '',
          'success'
        ).then(() => {
          this.Enviar(this.usuario.correo);
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

  public Enviar(correo: String) {
    this.correoService.CorreoRegistro(correo).subscribe((respuesta: boolean) => {
      if (respuesta) {
        Swal.fire({
          title: 'Se envió correctamente',
          text: 'Se ha enviado la información correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        this.usuarioForm.reset();
      } else {
        Swal.fire({
          title: 'Ha ocurrido un error',
          text: 'No se ha podido enviar la información',
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

  public validarControles(nombreControl: string): boolean {
    return (this.usuarioForm.get(nombreControl).invalid);
  }

}
