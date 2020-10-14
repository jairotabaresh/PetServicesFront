import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Service/usuario.service';
import { Usuario } from '../../Modelo/Usuario';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrls: ['./listarusuario.component.css']
})
export class ListarusuarioComponent implements OnInit {

  public Usuarios: Usuario[];
  constructor(private usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.Listar();
  }

  public Listar(){
    this.usuarioService.Listar().subscribe((respuesta: Usuario[]) => {
      this.Usuarios = respuesta;
    }, err => {
      this.Usuarios = new Array();
    });
  }
}
