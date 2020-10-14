import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Modelo/Usuario';
import { Rol } from '../../Modelo/Rol';
import { RolService } from '../../Service/rol.service';
import { UsuarioService } from '../../Service/usuario.service';



@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})

export class CrearusuarioComponent implements OnInit {
  public usuario = new Usuario();
  public roles: Rol[];

  constructor(private rolService: RolService,
              private usuarioService: UsuarioService) {
    this.listarRol();
    this.usuario.rol = new Rol();
  }

  ngOnInit(): void {
  }

  public listarRol(){
    this.rolService.listar().subscribe((respuesta: Rol[]) => {
      this.roles = respuesta;
    }, err => {
      this.roles = new Array();
    });

  }

  public Guardar(){
    debugger;
    this.usuarioService.Crear(this.usuario).subscribe((respuesta: boolean) =>
    {
      if (respuesta){
        console.log("Entro");
      } else {
        console.log("No entro");
      }
    }, err => {
      console.log("Error");
    });
  }
}
