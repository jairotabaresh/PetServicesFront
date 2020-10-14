import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Service/usuario.service';
import { Usuario } from '../../Modelo/Usuario';
import { RolService } from 'src/app/Service/rol.service';
import { Rol } from 'src/app/Modelo/Rol';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrls: ['./listarusuario.component.css']
})
export class ListarusuarioComponent implements OnInit {

  public Usuarios: Usuario[];
  public roles: Rol[];
  
  constructor(private usuarioService: UsuarioService, private rolService: RolService) { }

  ngOnInit(): void {
    this.Listar();
    this.listarRol();
  }

  public Listar(){
    this.usuarioService.Listar().subscribe((respuesta: Usuario[]) => {
      this.Usuarios = respuesta;
    }, err => {
      this.Usuarios = new Array();
    });
  }

  public listarRol(){
    this.rolService.listar().subscribe((respuesta: Rol[]) => {
      this.roles = respuesta;
    }, err => {
      this.roles = new Array();
    });

  }
}
