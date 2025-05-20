import { Routes } from '@angular/router';
import { CrearEstudianteComponent } from './Components/crear-estudiante/crear-estudiante.component';
import { MostrarRegistrosComponent } from './Components/mostrar-registros/mostrar-registros.component';
import { RegistrarClaseComponent } from './Components/registrar-clase/registrar-clase.component';
import { VerCompanerosComponent } from './Components/ver-companeros/ver-companeros.component';
import { RegistrarCreditosComponent } from './Components/registrar-creditos/registrar-creditos.component';

export const routes: Routes = [
  { path: 'registrar-estudiante', component: CrearEstudianteComponent },
  { path: 'ver-registros', component: MostrarRegistrosComponent },
   { path: 'registrar-clases', component: RegistrarClaseComponent },
    { path: 'ver-companeros', component: VerCompanerosComponent },
        { path: 'registrar-creditos', component: RegistrarCreditosComponent },
  { path: '', redirectTo: 'registrar-estudiante', pathMatch: 'full' },
  
  { path: '**', redirectTo: '' }
];
