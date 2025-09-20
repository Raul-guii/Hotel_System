import { Routes } from '@angular/router';
import { ListarQuartoComponent } from './listar/listar.component';
import { CadastrarQuartoComponent } from './cadastrar/cadastrar.component';
import { EditarQuartoComponent } from './editar/editar.component';

export const quartosRoutes: Routes = [
  { path: 'quartos/listar', component: ListarQuartoComponent },
  { path: 'quartos/cadastrar', component: CadastrarQuartoComponent },
  { path: 'quartos/editar', component: EditarQuartoComponent }
];
