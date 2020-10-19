import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from '../../Modelo/Mascota';
import { MascotaService } from '../../Service/mascota.service';
import { Usuario } from '../../Modelo/Usuario';
import { UsuarioService } from '../../Service/usuario.service';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})
export class ModificarMascotaComponent implements OnInit {

  public usuarios: Usuario[];
  public mascota: Mascota;
  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');

  constructor(private router: Router,
              private mascotaService: MascotaService,
              private usuarioService: UsuarioService) {
      this.mascota = new Mascota();
      this.mascota.usuario = new Usuario();

      if (this.idUsuario === null ){
        this.router.navigate(['iniciosesion']);
      }

      if (this.idUsuario !== null && this.rol !== 'Administrador' ){
        this.router.navigate(['app']);
      }
    }

  ngOnInit(): void {
    this.CargarInfo();
  }

  public CargarInfo () {
    let id = localStorage.getItem("id");
    this.mascotaService.buscarPorId(id).subscribe((respuesta: Mascota) => {
      this.mascota = respuesta;
    }, err => {
      alert("un error a ocurrido al cargar al mascota");
    });
    this.usuarioService.Listar().subscribe((respuesta: Usuario[]) => {
      this.usuarios = respuesta;
    }, err => {
      alert("un error a ocurrido al cargar los usuario");
    })
  }

  public Volver() {
    this.router.navigate(['mascota']);
  }

  public Actualizar() {
    this.mascotaService.agregar(this.mascota).subscribe((respuesta: boolean) => {
      if (respuesta == true) {
        alert("Actualizacion exitosa")
      }
      else {
        alert("Actualizacion fallida")
      }
    })
    this.router.navigate(['mascota']);
  }
}
