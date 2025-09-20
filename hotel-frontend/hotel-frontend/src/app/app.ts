import { Component, signal } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { ListarHospedeComponent } from './hospedes/listar/listar.component';
import { ListarQuartoComponent } from './quartos/listar/listar.component';
import { CadastrarHospedeComponent } from './hospedes/cadastrar/cadastrar.component';
import { CadastrarQuartoComponent } from './quartos/cadastrar/cadastrar.component';
import { EditarHospedeComponent } from './hospedes/editar/editar.component';
import { EditarQuartoComponent } from './quartos/editar/editar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

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
    { path: '', component: HomeComponent },
    { path: 'hospedes/cadastrar', component: CadastrarHospedeComponent },
    { path: 'hospedes/listar', component: ListarHospedeComponent },
    { path: 'hospedes/editar/:id', component: EditarHospedeComponent },

    { path: 'quartos/listar', component: ListarQuartoComponent },
    { path: 'quartos/cadastrar', component: CadastrarQuartoComponent },
    { path: 'quartos/editar/:id', component: EditarQuartoComponent },
    
    { path: '', redirectTo: 'hospedes/listar', pathMatch: 'full' },
        { path: 'reservas/listar', loadComponent: () =>
        import('./reservas/listar/listar.component').then(m => m.ListarReservaComponent) },
    { path: 'reservas/cadastrar', loadComponent: () =>
        import('./reservas/cadastrar/cadastrar.component').then(m => m.CadastrarReservaComponent) },
    { path: 'reservas/editar/:id', loadComponent: () =>
        import('./reservas/editar/editar.component').then(m => m.EditarReservaComponent) },
    { path: '', redirectTo: 'hospedes/listar', pathMatch: 'full' },
   { path: 'reservas',
  loadChildren: () =>
    import('./reservas/reservas.modules').then(m => m.ReservasModule)
  },
    { path: '', redirectTo: 'hospedes/listar', pathMatch: 'full' }
    
  ])
];



