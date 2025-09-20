import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarQuartoComponent } from './listar/listar.component';
import { CadastrarQuartoComponent } from './cadastrar/cadastrar.component';
import { EditarQuartoComponent } from './editar/editar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ListarQuartoComponent,
    CadastrarQuartoComponent,
    EditarQuartoComponent,
    RouterModule.forChild([
      { path: 'listar', component: ListarQuartoComponent },
      { path: 'cadastrar', component: CadastrarQuartoComponent },
      { path: 'editar/:id', component: EditarQuartoComponent }
    ])
  ]
})
export class QuartoModule { }
