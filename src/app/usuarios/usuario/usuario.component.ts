import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');

  constructor( private router: Router) {
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
