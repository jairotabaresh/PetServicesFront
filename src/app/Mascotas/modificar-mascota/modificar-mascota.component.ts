import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from '../../Modelo/Mascota';
import { MascotaService } from '../../Service/mascota.service';
import { Usuario } from '../../Modelo/Usuario';
import { UsuarioService } from '../../Service/usuario.service';
import Swal from 'sweetalert2';
import {FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})
export class ModificarMascotaComponent implements OnInit {

  public usuarios: Usuario[];
  public mascota: Mascota;
  public modificarMascotaForm: FormGroup;
  public camposObligatorios = false;

  constructor(private router: Router, 
              private mascotaService: MascotaService, 
              private usuarioService: UsuarioService) { 
      this.mascota = new Mascota();
      this.mascota.usuario = new Usuario();
      
      this.mascota.usuario = new Usuario();
      this.modificarMascotaForm = new FormGroup({
        nombre: new FormControl('', Validators.required),
        especie: new FormControl('', Validators.required),
        raza: new FormControl('', Validators.required),
        edad: new FormControl('', Validators.required),
        usuario: new FormControl('', Validators.required)
      });

    }

  ngOnInit(): void {
    this.CargarInfo();
  }

  public CargarInfo () {
    let id = localStorage.getItem("id");
    this.mascotaService.buscarPorId(id).subscribe((respuesta: Mascota) => {
      this.mascota = respuesta;
    }, err => {
      console.log("Un error a ocurrido al cargar la mascota");
    });
    this.usuarioService.Listar().subscribe((respuesta: Usuario[]) => {
      this.usuarios = respuesta;
    }, err => {
      console.log("Un error a ocurrido al cargar la mascota");
    })
  }

  public Volver() {
    this.router.navigate(['mascota']);
  }

  public Actualizar() {
    if (this.modificarMascotaForm.valid) {
      this.mascotaService.agregar(this.mascota).subscribe((respuesta: boolean) => {
        if (respuesta == true) {
          Swal.fire(
            'Registro actualizado',
            '',
            'success'
          )
        }
        else {
          Swal.fire(
            'Actualizacion fallida',
            '',
            'error'
          )
        }
      })
      this.router.navigate(['mascota']);
    }
    else {
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
    return  (this.modificarMascotaForm.get(nombreControl).invalid);
  }

}
