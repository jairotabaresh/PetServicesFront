import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../Service/usuario.service';
import { Usuario } from '../../Modelo/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrls: ['./listarusuario.component.css']
})
export class ListarusuarioComponent implements OnInit {

  public Usuarios: Usuario[];
  constructor(private usuarioService: UsuarioService, private router: Router) { }

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

  @ViewChild('content') content: any;
  public Editar(usuario: Usuario):void {
    localStorage.setItem("id", usuario.id.toString());
    // this.router.navigate(["usuario"])
    this.content.nativeElement.className = 'modal fade show';
  }
}
