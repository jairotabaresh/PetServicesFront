import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../Service/mascota.service';
import { Mascota } from '../../Modelo/Mascota';
import { Usuario } from '../../Modelo/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';
import Swal from 'sweetalert2';
import {FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  public usuarios: Usuario[];
  public mascota: Mascota;
  public crearMascotaForm: FormGroup;
  public camposObligatorios = false;

  constructor(private mascotaService: MascotaService, 
                private usuarioService: UsuarioService) {
    this.mascota = new Mascota();
    this.mascota.usuario = new Usuario();
    this.crearMascotaForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      especie: new FormControl('', Validators.required),
      raza: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  public listarUsuarios () {
    this.usuarioService.Listar().subscribe((respuesta: Usuario[]) => {
      this.usuarios = respuesta;
    }, err => {
      console.log ("A ocurrido un error al intentar cargar los usuarios");
    })
  }

  public guardar () {
    if (this.crearMascotaForm.valid) {
      this.mascotaService.agregar(this.mascota).subscribe((respuesta: boolean) => {
        if (respuesta == true) {
          Swal.fire(
            'Mascota creada',
            '',
            'success'
          ).then(() => {
            window.location.reload();
          })
        }
        else {
          Swal.fire(
            'Lo siento',
            'Algo salió mal',
            'error'
          )
        }
      }, err => {
        Swal.fire(
          'Lo siento',
          'Algo salió mal',
          'error'
        )
      });
    } else {
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
    return  (this.crearMascotaForm.get(nombreControl).invalid);
  }
}
