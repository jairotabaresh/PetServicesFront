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

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.css']
})

export class AgendarCitasComponent implements OnInit {
  public cita = new Cita();
  public usuarios: Usuario[];
  public servicios: Servicio[];
  public Estados: Estado[];
  public idUsuario;
  public mascotas: Mascota[];
  public citaForm: FormGroup;
  public minFecha = Date.now();
  public camposObligatorios = false;

  constructor(private citaService: CitaService,
              private usuarioService: UsuarioService,
              private servicioService: ServicioService,
              private mascotaService: MascotaService ) {

                this.cita.servicio = new Servicio();
                this.cita.estado = new Estado();
                this.cita.mascota = new Mascota();
                this.listarUsuario();
                this.listarServicio();

                this.citaForm = new FormGroup({
                  fecha: new FormControl('', [Validators.required, ]),
                  hora: new FormControl('', Validators.required),
                  comentarios: new FormControl(),
                  usuario: new FormControl('', Validators.required),
                  mascota: new FormControl('', Validators.required),
                  servicio: new FormControl('', Validators.required)
                });
               }

  ngOnInit(): void {
  }

  public listarUsuario(): void{
    this.usuarioService.Listar().subscribe((respuesta: Usuario[]) => {
      this.usuarios = respuesta;
    }, err => {
      this.usuarios = new Array();
    });
  }

  public listarMascota(): void{
   this.mascotaService.listarPorUsuario(this.idUsuario).subscribe((resultado: Mascota[]) => {
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

  public Guardar(): void{
    if (this.citaForm.valid) {
      let fechaActual = new Date();
      let fecha: Date = new Date(this.cita.fecha);
      if (fechaActual.getTime() - fecha.getTime() <= 0 ){
        this.citaService.Crear(this.cita).subscribe((respuesta: boolean) => {
          if (respuesta){
            Swal.fire({
              title: 'Se agendo correctamente',
              text: 'Se ha agendado la cita correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            }).then(() => {
              this.citaForm.reset();
              this.cita = new Cita();
              this.cita.servicio = new Servicio();
              this.cita.estado = new Estado();
              this.cita.mascota = new Mascota();
              window.location.reload();
            })
          } else {
            Swal.fire({
              title: 'Ha ocurrido un error',
              text: 'Ya hay una cita agendada para la fecha y hora seleccionada',
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
      }else {
        Swal.fire({
          title: 'No se pudo enviar los datos',
          text: 'La fecha de la cita debe ser mayor a la fecha actual',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
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
    return  (this.citaForm.get(nombreControl).invalid);
  }

}
