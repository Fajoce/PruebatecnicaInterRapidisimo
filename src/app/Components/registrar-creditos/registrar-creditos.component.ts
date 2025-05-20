import { Component, OnInit } from '@angular/core';
import { EstudianteMateriaService } from '../../Services/estudiante-materia.service';
import { RegistrarCreditosDTO } from '../../Models/RegistrarCreditosDTO';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MateriaProfesorService } from '../../Services/materia-profesor.service';
import { CommonModule } from '@angular/common';
import {  SelectEstudiantesDTO, SelectMateriasDTO} from '../../Models/Materiasprofesor';

@Component({
  selector: 'app-registrar-creditos',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrar-creditos.component.html',
  styleUrl: './registrar-creditos.component.css'
})
export class RegistrarCreditosComponent implements OnInit {
  creditosForm!: FormGroup;
  mensaje: string = '';
  error: string = '';
   estudiantes: SelectEstudiantesDTO[] = [];
  materias: SelectMateriasDTO[] = [];

  constructor(
    private fb: FormBuilder,
    private estudiantemateriaService: EstudianteMateriaService,
    private materiasProfesor :MateriaProfesorService
  ) {}

  ngOnInit(): void {
    this.cargarDatosSelects();
    this.creditosForm = this.fb.group({
      estudianteID: [null, [Validators.required, Validators.min(1)]],
      materiaID: [null, [Validators.required, Validators.min(1)]]
    });
  }

  registrar() {
    this.mensaje = '';
    this.error = '';

    if (this.creditosForm.invalid) {
      this.error = 'El formulario no es válido.';
      return;
    }

    const dto: RegistrarCreditosDTO = this.creditosForm.value;

    this.estudiantemateriaService.registrarClase(dto).subscribe({
      next: (resultado) => {
        if (resultado) {
          this.mensaje = 'Créditos registrados correctamente.';
          this.creditosForm.reset();
        } else {
          this.error = 'No se pudo registrar los créditos.';
        }
      },
      error: (err) => {
        this.error = 'Error al registrar créditos.';
        console.error(err);
      }
    });
      }
      cargarDatosSelects(): void {

    this.materiasProfesor.mostrarEstudiantes().subscribe({
      next: (data) => this.estudiantes = data
    });

    this.materiasProfesor.mostrarMaterias().subscribe({
      next: (data) => this.materias = data
    });
}
}




