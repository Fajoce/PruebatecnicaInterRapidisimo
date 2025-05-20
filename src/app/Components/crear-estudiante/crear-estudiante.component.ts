import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EstudiantesService } from '../../Services/estudiantes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-estudiante',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-estudiante.component.html',
  styleUrl: './crear-estudiante.component.css'
})
export class CrearEstudianteComponent {
estudianteForm: FormGroup;
  creado = false;
  error = '';

  constructor(private fb: FormBuilder, private estudiantesService: EstudiantesService) {
    this.estudianteForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwordHash: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.estudianteForm.invalid) return;

    this.estudiantesService.crearEstudiante(this.estudianteForm.value).subscribe({
      next: res => {
        this.creado = true;
        this.estudianteForm.reset();
      },
      error: err => {
        this.error = 'Ocurrió un error al registrar el estudiante.';
        console.error(err);
      }
    });
  }
}
