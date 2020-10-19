import { Component, OnInit } from '@angular/core';
import { Correo } from '../Modelo/Correo';
import { CorreoService } from '../Service/correo.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',],
  styles: ['agm-map { height: 300px;}']
})

export class ContactComponent implements OnInit {
  public correo = new Correo();
  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');

  constructor(private correoService: CorreoService,
              private router: Router) {
                if (this.idUsuario !== null ){
                  this.router.navigate(['app']);
                }
              }

  ngOnInit(): void {
  }

  lat: number = 51.678418;
  lng: number = 7.809007;

  public Enviar(){
    this.correoService.Enviar(this.correo).subscribe((respuesta: boolean) =>
    {
      if (respuesta){
        console.log("Envió");
      } else {
        console.log("No envió");
      }
    }, err => {
      console.log("Error");
    });
  }
}
