import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Modelo/Usuario';
import { UsuarioService } from '../Service/usuario.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {

  public usuario = new Usuario();
  public iniciosesionForm : FormGroup;
  public camposObligatorios = false;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  
  constructor(private usuarioService: UsuarioService) {
    this.iniciosesionForm = new FormGroup({
      correo: new FormControl('',Validators.required),
      contrasena: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]) 
    })
    
   }

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
       } else {
         
       }
    });
  }

  public validarControles(nombreControl: string): boolean {
    return (this.iniciosesionForm.get(nombreControl).invalid);
  }


}
