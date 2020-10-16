import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../Modelo/Mascota';
import { MascotaService } from '../../Service/mascota.service'
import { Subject } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {

  public mascotas: Mascota[];
  public dtTrigger: Subject<Mascota> = new Subject();
  constructor(private mascotaService: MascotaService, 
              private router: Router) { }

  ngOnInit(): void {
    this.Listar();
  }

  public Listar () {
    console.log ('Estoy en listar');
    this.mascotaService.Listar().subscribe ((respuesta: Mascota[]) => {
      this.mascotas = respuesta;
      this.dtTrigger.next();
    }, err => {
      this.mascotas = new Array ();
    });
    console.log (this.mascotas);
  }

  public Editar (mascota: Mascota) {
    localStorage.setItem('id', mascota.id.toString());
    this.router.navigate(['mascota/editar']);
  }
}
