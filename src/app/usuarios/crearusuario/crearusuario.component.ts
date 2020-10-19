import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Modelo/Usuario';
import { Rol } from '../../Modelo/Rol';
import { RolService } from '../../Service/rol.service';
import { UsuarioService } from '../../Service/usuario.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';



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
    private usuarioService: UsuarioService) {
    this.listarRol();
    this.usuario.rol = new Rol();

    this.usuarioForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
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

  public Guardar() {
    if (this.usuarioForm.valid) {
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
    return (this.usuarioForm.get(nombreControl).invalid);
  }

}
