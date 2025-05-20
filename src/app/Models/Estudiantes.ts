export interface CrearEstudianteDTO {
  nombre: string;
  email: string;
  passwordHash: string;
}

export interface VerNombresEstudiantesDTO {
  materia: string;
  companeros: string[];
}