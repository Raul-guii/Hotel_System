import { Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';

export const hospedesRoutes: Routes = [
  { path: 'hospedes/listar', component: ListarComponent },
  { path: 'hospedes/cadastrar', component: CadastrarComponent },
  { path: 'hospedes/editar', component: EditarComponent }
];
