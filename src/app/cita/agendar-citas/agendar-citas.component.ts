import { Component, OnInit } from '@angular/core';
/* Modelo */
import { Usuario } from '../../Modelo/Usuario';
import { Estado } from '../../Modelo/Estado';
import { Servicio } from '../../Modelo/Servicio';
import { Cita } from '../../Modelo/Cita';

/* Servicios*/
import { CitaService } from '../../Service/cita.service';
import { UsuarioService } from '../../Service/usuario.service';
import { ServicioService } from '../../Service/servicio.service';
import { EstadoService } from '../../Service/estado.service';




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
  public idUsuario = 0;
  public mascotas: number;

  constructor(private citaService: CitaService,
              private usuarioService: UsuarioService,
              private servicioService: ServicioService,
              private estadoService: EstadoService ) {

                this.cita.servicio = new Servicio();
                this.cita.estado = new Estado();

                this.listarUsuario();
                this.listarServicio();
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
    console.log('Entro a mascotas');
    this.mascotas =  this.idUsuario;
  }

  public listarServicio(){
    this.servicioService.Lista().subscribe((respuesta: Servicio[]) => {
      this.servicios = respuesta;
    }, err => {
      this.servicios = new Array();
    });
  }

  public Guardar(){
    console.log(this.cita);
  }
}
