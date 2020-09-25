import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { CrearMascotaComponent } from './Mascotas/crear-mascota/crear-mascota.component';
import { ModificarMascotaComponent } from './Mascotas/modificar-mascota/modificar-mascota.component';
import { MascotaComponent } from './Mascotas/mascota/mascota.component';
import { ListarMascotasComponent } from './Mascotas/listar-mascotas/listar-mascotas.component';

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
    CrearMascotaComponent,
    ModificarMascotaComponent,
    MascotaComponent,
    ListarMascotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EntryComponent]
})
export class AppModule { }
