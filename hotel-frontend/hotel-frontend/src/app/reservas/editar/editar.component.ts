import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService, Reserva } from '../../services/reserva.service';

@Component({
  selector: 'app-editar-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarReservaComponent implements OnInit {
  reservaId!: number;
  dataInicio: string = '';
  dataFim: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.reservaId = Number(this.route.snapshot.paramMap.get('id'));
    this.reservaService.buscarReservaPorId(this.reservaId)
      .subscribe((reserva: Reserva) => {
        this.dataInicio = reserva.dataInicio;
        this.dataFim = reserva.dataFim;
      });
  }

  salvar(): void {
  const dataInicioISO = this.dataInicio + ':00';
  const dataFimISO = this.dataFim + ':00';

    this.reservaService.editarReserva(this.reservaId, dataInicioISO, dataFimISO)
      .subscribe(() => this.router.navigate(['/reservas/listar']));
  }
}
