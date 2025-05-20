import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrearEstudianteDTO, VerNombresEstudiantesDTO } from '.././Models/Estudiantes'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private apiUrl = 'https://localhost:7273/api/Estudiantes';

  constructor(private http: HttpClient) {}

  crearEstudiante(estudiante: CrearEstudianteDTO): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, estudiante);
  }

  obtenerCompanerosPorEstudiante(estudianteID: number): Observable<VerNombresEstudiantesDTO[]> {
  return this.http.get<VerNombresEstudiantesDTO[]>(
    `${this.apiUrl}/${estudianteID}`);
  }
}
