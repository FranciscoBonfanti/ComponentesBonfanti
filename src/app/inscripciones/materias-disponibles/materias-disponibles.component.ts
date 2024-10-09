import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-materias-disponibles',
  templateUrl: './materias-disponibles.component.html',
  styleUrl: './materias-disponibles.component.css'
})
export class MateriasDisponiblesComponent {

  materiasDisponibles = [
    { nombre: 'Angular Avanzado', inicio: new Date(2024, 9, 1), fin: new Date(2025, 0, 31) },
    { nombre: 'Node.js con Express', inicio: new Date(2024, 9, 15), fin: new Date(2025, 1, 15) },
    { nombre: 'JavaScript Moderno', inicio: new Date(2024, 10, 1), fin: new Date(2025, 2, 1) },
    { nombre: 'Desarrollo con Python', inicio: new Date(2024, 11, 1), fin: new Date(2025, 3, 1) },
  ];

  @Output() inscripcionEvento = new EventEmitter<any>();

  inscribirse(materia: any) {
    this.inscripcionEvento.emit(materia);
  }

}
