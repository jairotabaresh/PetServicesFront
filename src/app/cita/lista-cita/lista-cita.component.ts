import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { CitaService } from '../../Service/cita.service';
import { Cita } from '../../Modelo/Cita';

@Component({
  selector: 'app-lista-cita',
  templateUrl: './lista-cita.component.html',
  styleUrls: ['./lista-cita.component.css']
})
export class ListaCitaComponent implements OnInit {

  public citas: Cita[];
  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');
  public dtTrigger: Subject<Cita> = new Subject();

  constructor( private citaService: CitaService,
               private router: Router) {

                if (this.idUsuario === null ){
                  this.router.navigate(['iniciosesion']);
                }

                if (this.rol === 'Administrador'){
                  this.listar();
                } else {
                  this.listarUsuario();
                }
   }

  ngOnInit(): void {
  }

  public listar(): void{
    this.citaService.Lista().subscribe((respuesta: Cita[]) => {
      this.citas = respuesta;
      this.dtTrigger.next();
    }, err => {
      this.citas = new Array();
    });
  }

  public listarUsuario(): void{
    this.citaService.listarPorUsuario(parseInt(this.idUsuario, 0 )).subscribe((respuesta: Cita[]) => {
      if (this.rol === 'Usuario' && respuesta.length > 0){
        this.citas = new Array();
        console.log(respuesta);
        respuesta.forEach( cita => {
          if ( cita.estado.nombre === 'Agendado'){
            this.citas.push(cita);
          }
        });
      } else {
      this.citas = respuesta;
    }
      this.dtTrigger.next();
    }, err => {
      this.citas = new Array();
    });
  }

  public editar(idCita: number): void {
    localStorage.setItem('IdCita', idCita.toString());
    this.router.navigate(['modificarCitas']);
  }
}
