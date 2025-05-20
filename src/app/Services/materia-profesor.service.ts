import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VerRegistros } from '../Models/Verregistros';
import { MateriasProfesorDTO, SelectEstudiantesDTO, SelectMateriasDTO, SelectProfesoresDTO } from '../Models/Materiasprofesor';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MateriaProfesorService {
private apiUrl = 'https://localhost:7273/api/ProfesorMaterias'; // Ajusta la ruta si es diferente

  constructor(private http: HttpClient) {}

  obtenerRegistros(): Observable<VerRegistros[]> {
    return this.http.get<VerRegistros[]>(`${this.apiUrl}`);
  }
  registrarClase(dto: MateriasProfesorDTO): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}`, dto);
  }
   mostrarEstudiantes(): Observable<SelectEstudiantesDTO[]> {
    return this.http.get<SelectEstudiantesDTO[]>(`${this.apiUrl}/Estudiantes`);
  }
    mostrarProfesores(): Observable<SelectProfesoresDTO[]> {
    return this.http.get<SelectProfesoresDTO[]>(`${this.apiUrl}/Profesores`);
  }
    mostrarMaterias(): Observable<SelectMateriasDTO[]> {
    return this.http.get<SelectMateriasDTO[]>(`${this.apiUrl}/Materias`);
  }
}
