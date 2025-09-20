import { Routes } from '@angular/router';
import { ListarHospedeComponent } from './listar/listar.component';
import { CadastrarHospedeComponent } from './cadastrar/cadastrar.component';
import { EditarHospedeComponent } from './editar/editar.component';

export const hospedesRoutes: Routes = [
  { path: 'hospedes/listar', component: ListarHospedeComponent },
  { path: 'hospedes/cadastrar', component: CadastrarHospedeComponent },
  { path: 'hospedes/editar', component: EditarHospedeComponent }
];
