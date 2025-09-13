import { Component, signal } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { ListarComponent } from './hospedes/listar/listar.component';
import { CadastrarComponent } from './hospedes/cadastrar/cadastrar.component';
import { EditarComponent } from './hospedes/editar/editar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

export const appProviders = [
  provideRouter([
    { path: 'listar', component: ListarComponent },
    { path: 'cadastrar', component: CadastrarComponent },
    { path: 'editar/:id', component: EditarComponent },
    { path: '', redirectTo: 'listar', pathMatch: 'full' }

  ])
];


