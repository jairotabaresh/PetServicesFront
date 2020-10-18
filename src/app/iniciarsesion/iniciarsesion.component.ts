import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Modelo/Usuario';
import { UsuarioService } from '../Service/usuario.service';
import Swal from 'sweetalert2';

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
    
    this.usuarioService.buscarUsuario(this.usuario).subscribe((respuesta:Usuario)=> {
      
      if (respuesta.correo != this.usuario.correo){
        Swal.fire(
          'Correo no registrado o contraseña invalida',
          '',
          'success'
        )
       }
    });
  }

}
