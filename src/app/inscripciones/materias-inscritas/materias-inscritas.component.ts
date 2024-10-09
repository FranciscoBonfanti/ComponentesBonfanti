import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-materias-inscritas',
  templateUrl: './materias-inscritas.component.html',
  styleUrl: './materias-inscritas.component.css'
})
export class MateriasInscritasComponent {

  @Input() materiasInscritas: any[] = [];


}
