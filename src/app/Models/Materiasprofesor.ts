export interface MateriasProfesorDTO {
  materiaID: number;
  profesorID: number;
  estudianteID: number;
}
export interface SelectProfesoresDTO {
  profesorID: number;
  nombre: string;
}
export interface SelectEstudiantesDTO {
  estudianteID: number;
  nombre: string;
}
export interface SelectMateriasDTO {
  materiaID: number;
  nombre: string;
}