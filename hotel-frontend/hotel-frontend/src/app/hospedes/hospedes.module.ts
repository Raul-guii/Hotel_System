import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListarHospedeComponent } from './listar/listar.component';
import { CadastrarHospedeComponent } from './cadastrar/cadastrar.component';
import { EditarHospedeComponent } from './editar/editar.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ListarHospedeComponent,
    CadastrarHospedeComponent,
    EditarHospedeComponent,
    RouterModule.forChild([
      { path: 'listar', component: ListarHospedeComponent },
      { path: 'cadastrar', component: CadastrarHospedeComponent },
      { path: 'editar/:id', component: EditarHospedeComponent }
    ])
  ]
})
export class HospedesModule { }
