import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasDisponiblesComponent } from './materias-disponibles.component';

describe('MateriasDisponiblesComponent', () => {
  let component: MateriasDisponiblesComponent;
  let fixture: ComponentFixture<MateriasDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MateriasDisponiblesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriasDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
