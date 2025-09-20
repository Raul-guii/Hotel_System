import { RouterModule, Routes } from "@angular/router";
import { ListarReservaComponent } from "./listar/listar.component";
import { CadastrarReservaComponent } from "./cadastrar/cadastrar.component";
import { EditarReservaComponent } from "./editar/editar.component";
import { NgModule } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService, Reserva } from '../services/reserva.service';



const routes: Routes = [
    { path: 'listar', component: ListarReservaComponent },
    { path: 'reservas/cadastrar', component: CadastrarReservaComponent },
    { path: 'reservas/editar/:id', component: EditarReservaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ReservasRoutingModule {}