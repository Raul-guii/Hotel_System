import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  imports: [
    ListarComponent,
    CadastrarComponent,
    CommonModule,
    RouterModule.forChild([
      { path: 'listar', component: ListarComponent },
      { path: 'cadastrar', component: CadastrarComponent }
    ])
  ]
})
export class HospedesModule { }
