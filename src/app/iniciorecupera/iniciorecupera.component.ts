import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Correo } from '../Modelo/Correo';
import { CorreoService } from '../Service/correo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciorecupera',
  templateUrl: './iniciorecupera.component.html',
  styleUrls: ['./iniciorecupera.component.css']
})
export class IniciorecuperaComponent implements OnInit {
  public correo = new Correo();
  public recuperaForm: FormGroup;
  public camposObligatorios = false;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private correoService: CorreoService) {
    this.recuperaForm = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)])
    });
  }

  ngOnInit(): void {
  }

  public Recuperar() {
    if (this.recuperaForm.valid) {
      this.correoService.Recuperar(this.correo).subscribe((respuesta: boolean) => {
        if (respuesta) {
          Swal.fire({
            title: 'Se envió correctamente',
            text: 'Se ha enviado la información correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          this.recuperaForm.reset();
          this.correo = new Correo();
        } else {
          Swal.fire({
            title: 'Ha ocurrido un error',
            text: 'El correo no existe en el sistema',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      }, err => {
        Swal.fire({
          title: 'No se pudo conectar al servidor',
          text: 'Por favor vuelve a intentarlo más tarde',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
    } else {
      this.camposObligatorios = true;
      Swal.fire({
        title: 'No se pudo enviar los datos',
        text: 'Por favor revise que la información esté correcta',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  public validarControles(nombreControl: string): boolean {
    return (this.recuperaForm.get(nombreControl).invalid);
  }
}
