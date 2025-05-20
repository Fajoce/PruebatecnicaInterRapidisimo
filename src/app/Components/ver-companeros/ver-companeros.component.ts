import { Component } from '@angular/core';
import { EstudiantesService } from '../../Services/estudiantes.service';
import { VerNombresEstudiantesDTO } from '../../Models/Estudiantes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ver-companeros',
  templateUrl: './ver-companeros.component.html',
  imports:[CommonModule, FormsModule]
})
export class VerCompanerosComponent {
  estudianteID: number = 0;
  resultados: VerNombresEstudiantesDTO[] = [];
  error: string = '';

  constructor(private estudiantesService: EstudiantesService) {}

  buscarCompaneros() {
    this.error = '';
    this.resultados = [];

    if (!this.estudianteID || this.estudianteID <= 0) {
      this.error = 'ID inválido.';
      return;
    }

    this.estudiantesService.obtenerCompanerosPorEstudiante(this.estudianteID)
      .subscribe({
        next: (data) => {
          this.resultados = data;
        },
        error: (err) => {
          this.error = 'Error al obtener compañeros.';
          console.error(err);
        }
      });
  }
}