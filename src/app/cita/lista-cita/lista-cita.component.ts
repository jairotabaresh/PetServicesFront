import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../Service/cita.service';
import { Cita } from '../../Modelo/Cita';

@Component({
  selector: 'app-lista-cita',
  templateUrl: './lista-cita.component.html',
  styleUrls: ['./lista-cita.component.css']
})
export class ListaCitaComponent implements OnInit {
  public citas: Cita[];

  constructor( private citaService: CitaService) {
    this.listar();
   }

  ngOnInit(): void {
  }

  public listar(){
    this.citaService.Lista().subscribe((respuesta: Cita[]) => {
      this.citas = respuesta;
    }, err => {
      this.citas = new Array();
    });
  }
}
