import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../Modelo/Mascota';
import { MascotaService } from '../../Service/mascota.service'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {

  public mascotas: Mascota[];
  public dtTrigger: Subject<Mascota> = new Subject();
  constructor(private mascotaService: MascotaService) { }

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
}
