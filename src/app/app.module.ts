import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MateriasInscritasComponent } from './inscripciones/materias-inscritas/materias-inscritas.component';
import { MateriasDisponiblesComponent } from './inscripciones/materias-disponibles/materias-disponibles.component';
import { InscripcionComponent } from './inscripciones/inscripcion/inscripcion.component';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    MateriasInscritasComponent,
    MateriasDisponiblesComponent,
    InscripcionComponent,
    ToolbarComponent,
    AlumnosComponent,
    CursosComponent,
    SidenavComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,
    MatSidenavModule, 
    MatToolbarModule,
    MatIcon,
    MatIconModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
