import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
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
              private estadoService: EstadoService,
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

  public listarUsuario(){
    this.usuarioService.Listar().subscribe((respuesta: Usuario[]) => {
      this.usuarios = respuesta;
    }, err => {
      this.usuarios = new Array();
    });
  }

  public listarMascota(){
   this.mascotaService.listarPorUsuario(this.idUsuario).subscribe((resultado: Mascota[]) => {
    this.mascotas = resultado;
   }, err => {
    this.mascotas = new Array();
   });
  }

  public listarServicio(){
    this.servicioService.Lista().subscribe((respuesta: Servicio[]) => {
      this.servicios = respuesta;
    }, err => {
      this.servicios = new Array();
    });
  }

  public Guardar(){
    if (this.citaForm.valid) {
      this.cita.hora = this.cita.hora;
      this.citaService.Crear(this.cita).subscribe((respuesta: boolean) => {
        if (respuesta){
          Swal.fire({
            title: 'Se agendo correctamente',
            text: 'Se ha agendado la cita correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          this.citaForm.reset();
          this.cita = new Cita();
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
