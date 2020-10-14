import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/Modelo/Rol';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-modificarusuario',
  templateUrl: './modificarusuario.component.html',
  styleUrls: ['./modificarusuario.component.css']
})
export class ModificarusuarioComponent implements OnInit {
  public usuario = new Usuario();
  public roles: Rol[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
