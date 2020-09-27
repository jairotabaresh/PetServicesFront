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
import { CrearusuarioComponent } from './usuarios/crearusuario/crearusuario.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { ModificarusuarioComponent } from './usuarios/modificarusuario/modificarusuario.component';
import { ListarusuarioComponent } from './usuarios/listarusuario/listarusuario.component';

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
    ListarusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EntryComponent]
})
export class AppModule { }
