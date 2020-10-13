import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EntryComponent } from './entry/entry.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StuffComponent } from './stuff/stuff.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { ContactComponent } from './contact/contact.component';
import { CrearusuarioComponent } from './usuarios/crearusuario/crearusuario.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { ModificarusuarioComponent } from './usuarios/modificarusuario/modificarusuario.component';
import { ListarusuarioComponent } from './usuarios/listarusuario/listarusuario.component';
import { CrearMascotaComponent } from './Mascotas/crear-mascota/crear-mascota.component';
import { ModificarMascotaComponent } from './Mascotas/modificar-mascota/modificar-mascota.component';
import { MascotaComponent } from './Mascotas/mascota/mascota.component';
import { ListarMascotasComponent } from './Mascotas/listar-mascotas/listar-mascotas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CitaComponent } from './cita/cita/cita.component';
import { ListaCitaComponent } from './cita/lista-cita/lista-cita.component';
import { MoficarCitasComponent } from './cita/moficar-citas/moficar-citas.component';
import { AgendarCitasComponent } from './cita/agendar-citas/agendar-citas.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciorecuperaComponent } from './iniciorecupera/iniciorecupera.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    ReservationComponent,
    EntryComponent,
    HeaderComponent,
    FooterComponent,
    StuffComponent,
    GalleryComponent,
    BlogComponent,
    BlogdetailsComponent,
    ContactComponent,
    CrearusuarioComponent,
    UsuarioComponent,
    ModificarusuarioComponent,
    ListarusuarioComponent,
    CrearMascotaComponent,
    ModificarMascotaComponent,
    MascotaComponent,
    ListarMascotasComponent,
    ServiciosComponent,
    CitaComponent,
    ListaCitaComponent,
    MoficarCitasComponent,
    AgendarCitasComponent,
    IniciarsesionComponent,
    RegistrarseComponent,
    IniciorecuperaComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: '2324242424'
    }),
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [EntryComponent]
})
export class AppModule { }
