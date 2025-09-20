import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { ListarReservaComponent } from './listar/listar.component';
import { CadastrarReservaComponent } from './cadastrar/cadastrar.component';
import { EditarReservaComponent } from './editar/editar.component';
import { ReservasRoutingModule } from './reservas-routing.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReservasRoutingModule,
    ListarReservaComponent,
    CadastrarReservaComponent,
    EditarReservaComponent
    ]
})
export class ReservasModule {}
