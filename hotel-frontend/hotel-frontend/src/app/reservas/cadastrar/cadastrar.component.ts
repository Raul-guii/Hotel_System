import { Component, OnInit } from '@angular/core'; // ✅ Import OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservaService, Reserva } from '../../services/reserva.service';

@Component({
  selector: 'app-cadastrar-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarReservaComponent implements OnInit { 

  reserva: Reserva = {
    numero: 1,
    status: 'OCUPADO',
    quartos: undefined,
    hospede: undefined,
    dataInicio: new Date().toISOString(),
    dataFim: new Date().toISOString()
  };

  constructor(private router: Router, private reservaService: ReservaService) {

    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state) {
      this.reserva.hospede = nav.extras.state['hospede'];
      this.reserva.quartos = nav.extras.state['quarto'];
      console.log('Reserva recebida:', this.reserva);
    }
  }


  ngOnInit(): void {

  }


salvarReserva(): void {
  if (!this.reserva.quartos || !this.reserva.hospede) {
    console.error('Quarto ou hóspede não selecionado!');
    return;
  }

  const reservaEnvio = {
    numero: this.reserva.numero,
    status: this.reserva.status,
    dataInicio: this.formatarData(new Date(this.reserva.dataInicio)),
    dataFim: this.formatarData(new Date(this.reserva.dataFim)),
    quartos: { id: this.reserva.quartos.id },
    hospede: { id: this.reserva.hospede.id }
  };

  console.log('Reserva enviada:', reservaEnvio);

  this.reservaService.cadastrarReserva(reservaEnvio)
    .subscribe({
      next: () => this.router.navigate(['/reservas/listar']),
      error: err => console.error('Erro ao cadastrar reserva:', err)
    });
}

  formatarData(data: Date): string {
  return data.toISOString().slice(0,19); 
}
}
