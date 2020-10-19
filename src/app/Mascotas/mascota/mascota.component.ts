import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');

  constructor(private router: Router) {
    if (this.idUsuario === null ){
      this.router.navigate(['iniciosesion']);
    }

    if (this.idUsuario !== null && this.rol !== 'Administrador' ){
      this.router.navigate(['app']);
    }
   }

  ngOnInit(): void {
  }

}
