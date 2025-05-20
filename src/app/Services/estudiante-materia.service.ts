import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VerRegistros } from '../Models/Verregistros';
import { RegistrarCreditosDTO } from '../Models/RegistrarCreditosDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteMateriaService {
private apiUrl = 'https://localhost:7273/api/EstudianteMaterias'; 

  constructor(private http: HttpClient) {}
  registrarClase(dto: RegistrarCreditosDTO): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}`, dto);
  }
}
