import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

/* Modelo */
import { Usuario } from '../../Modelo/Usuario';
import { Estado } from '../../Modelo/Estado';
import { Servicio } from '../../Modelo/Servicio';
import { Cita } from '../../Modelo/Cita';
import { Mascota } from '../../Modelo/Mascota';

/* Servicios*/
import { CitaService } from '../../Service/cita.service';
import { UsuarioService } from '../../Service/usuario.service';
import { ServicioService } from '../../Service/servicio.service';
import { EstadoService } from '../../Service/estado.service';
import { MascotaService } from '../../Service/mascota.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-moficar-citas',
  templateUrl: './moficar-citas.component.html',
  styleUrls: ['./moficar-citas.component.css']
})
export class MoficarCitasComponent implements OnInit {

  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');
  public idCita = localStorage.getItem('IdCita');

  public usuarios: Usuario[];
  public servicios: Servicio[];
  public Estados: Estado[];
  public mascotas: Mascota[];
  public estados: Estado[];
  public idUsuarioModificado: number;

  public cita: Cita;



  constructor(private citaService: CitaService,
              private usuarioService: UsuarioService,
              private servicioService: ServicioService,
              private mascotaService: MascotaService,
              private estadoService: EstadoService,
              private router: Router) {
                this.buscarCita(parseInt(this.idCita , 0));

                if (this.idUsuario === null ){
                  this.router.navigate(['iniciosesion']);
                }
 
              }

  ngOnInit(): void {
    this.listarUsuario();
    this.listarServicio();
    this.listarEstado();
  }

  public buscarCita(idCita: number): void{
    this.citaService.buscarPorId(idCita).subscribe( (respuesta: Cita) => {
      if (respuesta !== null){
        this.cita = respuesta;
        this.idUsuarioModificado = respuesta.mascota.usuario.id;
        this.cita.estado = respuesta.estado;

        this.listarMascota();
      }
      else {
        this.cita = new Cita();
        this.cita.mascota = new Mascota();
        this.cita.estado = new Estado();
        this.cita.servicio = new Servicio();
      }
    }, err => {
      this.cita = new Cita();
      this.cita.mascota = new Mascota();
      this.cita.estado = new Estado();
      this.cita.servicio = new Servicio();
    });
  }

  public listarUsuario(): void{
    this.usuarioService.Listar().subscribe((respuesta: Usuario[]) => {
      this.usuarios = respuesta;
    }, err => {
      this.usuarios = new Array();
    });
  }

  public listarMascota(): void{
   this.mascotaService.listarPorUsuario(this.idUsuarioModificado).subscribe((resultado: Mascota[]) => {
    this.mascotas = resultado;
   }, err => {
    this.mascotas = new Array();
   });
  }

  public listarServicio(): void{
    this.servicioService.Lista().subscribe((respuesta: Servicio[]) => {
      this.servicios = respuesta;
    }, err => {
      this.servicios = new Array();
    });
  }

  public listarEstado(): void{
    this.estadoService.Lista().subscribe((respuesta: Estado[]) => {
      this.estados = respuesta;
    }, err => {
      this.estados = new Array();
    });
  }

  public actualizar(): void{
    console.log(this.cita);
    this.citaService.Crear(this.cita).subscribe((respuesta: boolean) => {
      if (respuesta){
        Swal.fire({
          title: 'Se actualizado correctamente',
          text: 'Se ha actualizado la cita correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        localStorage.removeItem('IdCita');
        this.router.navigate(['citas']);

      } else {
        Swal.fire({
          title: 'Ha ocurrido un error',
          text: 'La cita no ha sido actualizada',
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

  public volver(): void{
    localStorage.removeItem('IdCita');
    this.router.navigate(['citas']);
  }
}
