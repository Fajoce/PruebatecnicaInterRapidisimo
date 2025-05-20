import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MateriaProfesorService } from '../../Services/materia-profesor.service';
import { MateriasProfesorDTO, SelectEstudiantesDTO, SelectMateriasDTO, SelectProfesoresDTO } from '../../Models/Materiasprofesor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-clase',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrar-clase.component.html',
  styleUrl: './registrar-clase.component.css'
})
export class RegistrarClaseComponent implements OnInit {
  claseForm!: FormGroup;
  mensajeExito = '';
  mensajeError = '';
  profesores: SelectProfesoresDTO[] = [];
  estudiantes: SelectEstudiantesDTO[] = [];
  materias: SelectMateriasDTO[] = [];

  constructor(
    private fb: FormBuilder,
    private service: MateriaProfesorService
  ) {}

  ngOnInit(): void {
      this.cargarDatosSelects();
    this.claseForm = this.fb.group({
      materiaID: [null, [Validators.required, Validators.min(1)]],
      profesorID: [null, [Validators.required, Validators.min(1)]],
      estudianteID: [null, [Validators.required, Validators.min(1)]]
    });
  
  }

  registrarClase(): void {
    if (this.claseForm.invalid) {
      this.claseForm.markAllAsTouched();
      return;
    }

    const dto: MateriasProfesorDTO = this.claseForm.value;

    this.service.registrarClase(dto).subscribe({
      next: () => {
        this.mensajeExito = 'Clase registrada correctamente.';
        this.mensajeError = '';
        this.claseForm.reset();
      },
      error: (err) => {
        this.mensajeError = err.error?.message || 'Error al registrar la clase.';
        this.mensajeExito = '';
      }
    });
  }
  cargarDatosSelects(): void {
    this.service.mostrarProfesores().subscribe({
      next: (data) => this.profesores = data
    });

    this.service.mostrarEstudiantes().subscribe({
      next: (data) => this.estudiantes = data
    });

    this.service.mostrarMaterias().subscribe({
      next: (data) => this.materias = data
    });
  }

}
