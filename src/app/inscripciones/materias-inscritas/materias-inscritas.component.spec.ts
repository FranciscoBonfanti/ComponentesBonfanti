import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasInscritasComponent } from './materias-inscritas.component';

describe('MateriasInscritasComponent', () => {
  let component: MateriasInscritasComponent;
  let fixture: ComponentFixture<MateriasInscritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MateriasInscritasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriasInscritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
