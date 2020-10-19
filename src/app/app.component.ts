import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PetService';

  public idUsuario = localStorage.getItem('Id');
  public rol = localStorage.getItem('Rol');

}
