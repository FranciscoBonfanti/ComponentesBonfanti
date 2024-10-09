import { Component, OnInit } from '@angular/core';

interface Materia {
  nombre: string;
  inicio: Date;
  fin: Date;
}

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css'] 
})
export class InscripcionComponent implements OnInit { 

  materias: string[] = ['Matemáticas', 'Física', 'Química', 'Biología']; 
  materiasInscritas: Materia[] = []; 

  ngOnInit() {
    this.cargarMateriasInscritas(); 
  }

  inscribirMateria(materia: string) {
    const yaInscrito = this.materiasInscritas.find((m) => m.nombre === materia);
    if (!yaInscrito) {
      const nuevaMateria: Materia = {
        nombre: materia,
        inicio: new Date(), 
        fin: new Date(new Date().setMonth(new Date().getMonth() + 1)), 
      };
      this.materiasInscritas.push(nuevaMateria);
      this.guardarMateriasInscritas(); 
    } else {
      alert('Ya estás inscrito en esta materia.');
    }
  }

  cargarMateriasInscritas() {
    const materiasGuardadas = localStorage.getItem('materiasInscritas');
    if (materiasGuardadas) {
      this.materiasInscritas = JSON.parse(materiasGuardadas);
    }
  }

  guardarMateriasInscritas() {
    localStorage.setItem('materiasInscritas', JSON.stringify(this.materiasInscritas));
  }

  estaInscrita(materia: string): boolean {
    return this.materiasInscritas.some(m => m.nombre === materia);
  }
}
