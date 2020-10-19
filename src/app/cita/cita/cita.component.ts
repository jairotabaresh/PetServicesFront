import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})

export class CitaComponent implements OnInit {

  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');

  constructor(private router: Router) {
    if (this.idUsuario === null ){
      this.router.navigate(['iniciosesion']);
    }
   }

  ngOnInit(): void {
  }

}
