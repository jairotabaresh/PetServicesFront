import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../Service/mascota.service';
import { Mascota } from '../../Modelo/Mascota';
import { Usuario } from '../../Modelo/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  public usuarios: Usuario[];
  public mascota: Mascota;

  constructor(private mascotaService: MascotaService, 
                private usuarioService: UsuarioService) {
    this.mascota = new Mascota();
    this.mascota.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  public listarUsuarios () {
    this.usuarioService.Listar().subscribe((respuesta: Usuario[]) => {
      this.usuarios = respuesta;
    }, err => {
      console.log ("A ocurrido un error al intentar cargar los usuarios");
    })
  }

  public guardar () {
    this.mascotaService.agregar(this.mascota).subscribe((respuesta: boolean) => {
        if (respuesta == true) {
          alert("Guardado exitoso");
        }
        else {
          alert("ocurrio un error en el guardado");
        }
      }, err => {
        alert("ocurrio un error en el guardado");
      });
  }
}
