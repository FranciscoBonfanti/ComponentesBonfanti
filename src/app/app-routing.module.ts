import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { InscripcionComponent } from './inscripciones/inscripcion/inscripcion.component';

const routes: Routes = [
  { path: 'dashboard/alumnos', component: AlumnosComponent },
  { path: 'dashboard/cursos', component: CursosComponent },
  { path: 'dashboard/usuarios', component: UsuariosComponent },
  { path: 'inscripciones', component: InscripcionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
