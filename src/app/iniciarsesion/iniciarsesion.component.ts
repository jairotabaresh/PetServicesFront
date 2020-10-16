import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Modelo/Usuario';
import { UsuarioService } from '../Service/usuario.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {

  public usuario = new Usuario();
  
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  public Validar(){
    
    console.log(this.usuario);
    this.usuarioService.buscarUsuario(this.usuario).subscribe((respuesta:Usuario)=> {
      console.log(respuesta);
      //if (Usuario.respuesta) {
      //  alert('Usuario Registrado');

      //} else {
      //  alert('usuario no resgistrado');
      //}
    //}, err => {
    //  console.log("Error");
    });
  }

}
