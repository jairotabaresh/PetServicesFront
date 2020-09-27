import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EntryComponent } from './entry/entry.component';
import { StuffComponent } from './stuff/stuff.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { ContactComponent } from './contact/contact.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

const routes: Routes = [
  {
    path: 'entry',
    component: EntryComponent,
  },
  {
    path: 'app',
    component: AppComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  },
  {
    path: 'stuff',
    component: StuffComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blogdetails',
    component: BlogdetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: '',
    redirectTo: 'app', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'app', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
