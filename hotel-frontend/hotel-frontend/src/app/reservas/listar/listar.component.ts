import { Component } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarReservaComponent {
  reservas: any[] = [];

  constructor(
    private reservaService: ReservaService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.carregarReservas();
  }

  carregarReservas(): void {
    this.reservaService.listarReserva().subscribe(data => {
      this.reservas = data;
    });
  }

  deletarReservas(id: number): void{
    if(confirm('Deseja realmente excluir a reserva?')){
      this.reservaService.deletarReserva(id).subscribe(() => {
        this.carregarReservas()
      });
    }
  }

  editarReserva(id: number): void {
  this.router.navigate([`/reservas/editar`, id]);
  }

}
