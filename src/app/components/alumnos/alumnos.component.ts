import { Component } from '@angular/core';
import { Alumno } from './alumno.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'] 
})
export class AlumnosComponent {
  nuevoAlumno: Alumno = { nombre: '', dni: 0, anio: 0, carrera: '' };
  alumnos: Alumno[] = [];
  alumnoAEditar: Alumno | null = null; 

  agregarAlumno() {
    if (this.nuevoAlumno.dni) {
      this.alumnos.push({ ...this.nuevoAlumno });
      this.nuevoAlumno = { nombre: '', dni: 0, anio: 0, carrera: '' };
    }
  }

  editarAlumno(alumno: Alumno) {
    this.alumnoAEditar = { ...alumno }; 
    this.nuevoAlumno = { ...alumno }; 
  }

  actualizarAlumno() {
    if (this.alumnoAEditar) {
      const index = this.alumnos.findIndex(a => a.dni === this.alumnoAEditar?.dni); 
      if (index !== -1) {
        this.alumnos[index] = { ...this.nuevoAlumno }; 
        this.nuevoAlumno = { nombre: '', dni: 0, anio: 0, carrera: '' }; 
        this.alumnoAEditar = null; 
      }
    }
  }

  eliminarAlumno(alumno: Alumno) {
    this.alumnos = this.alumnos.filter(a => a.dni !== alumno.dni); // Filtra el alumno a eliminar
  }
}
