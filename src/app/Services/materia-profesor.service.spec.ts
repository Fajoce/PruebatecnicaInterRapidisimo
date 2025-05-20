import { TestBed } from '@angular/core/testing';

import { MateriaProfesorService } from './materia-profesor.service';

describe('MateriaProfesorService', () => {
  let service: MateriaProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriaProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
