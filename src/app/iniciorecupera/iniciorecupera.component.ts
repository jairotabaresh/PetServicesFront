import { Component, OnInit } from '@angular/core';
import { Correo } from '../Modelo/Correo';
import { CorreoService } from '../Service/correo.service';

@Component({
  selector: 'app-iniciorecupera',
  templateUrl: './iniciorecupera.component.html',
  styleUrls: ['./iniciorecupera.component.css']
})
export class IniciorecuperaComponent implements OnInit {
  public correo = new Correo();

  constructor(private correoService: CorreoService) { }

  ngOnInit(): void {
  }

  public Recuperar(){
    this.correoService.Recuperar(this.correo).subscribe((respuesta: boolean) =>
    {
      if (respuesta){
        alert("Correo enviado, revise por favor");
      } else {
        alert("Correo no encontrado en el sistema");
      }
    }, err => {
      console.log("Error");
    });
  }

}
