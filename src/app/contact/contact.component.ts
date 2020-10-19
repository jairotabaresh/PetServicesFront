import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Correo } from '../Modelo/Correo';
import { CorreoService } from '../Service/correo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',],
  styles: ['agm-map { height: 300px;}']
})

export class ContactComponent implements OnInit {
  public correo = new Correo();
  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');
  public contactoForm: FormGroup;
  public camposObligatorios = false;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private namePattern: any = '^[a-zA-Z ]*$';

  constructor(private correoService: CorreoService,
              private router: Router) {
    this.contactoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]),
      correo: new FormControl('', [Validators.required,  Validators.pattern(this.emailPattern)]),
      mascota: new FormControl('', Validators.required),
      comentario: new FormControl('', Validators.required)
    });

    if (this.idUsuario !== null ){
      this.router.navigate(['app']);
    }
  }

  ngOnInit(): void {
  }

  lat: number = 51.678418;
  lng: number = 7.809007;

  public Enviar(){
    if (this.contactoForm.valid) {
    this.correoService.Enviar(this.correo).subscribe((respuesta: boolean) =>
    {
      if (respuesta){
        Swal.fire({
          title: 'Se envió correctamente',
          text: 'Se ha enviado la información correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        this.contactoForm.reset();
        this.correo = new Correo();
      } else {
        Swal.fire({
          title: 'Ha ocurrido un error',
          text: 'No se ha podido enviar la información',
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
  }else {
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
    return  (this.contactoForm.get(nombreControl).invalid);
  }
}
