import { Component, OnInit } from '@angular/core';
import { HospedeService, Hospede } from '../../services/hospede';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  hospedes: Hospede[] = [];

  constructor(
    private hospedeService: HospedeService,
    private router: Router   
  ) {}

  ngOnInit(): void {
    this.carregarHospedes();
  }

  carregarHospedes() {
    this.hospedeService.listar().subscribe({
      next: (dados) => this.hospedes = dados,
      error: (err) => console.error('Erro ao buscar hóspedes', err)
    });
  }

  deletarHospede(id: number) {
    this.hospedeService.deletarHospede(id).subscribe({
      next: () => this.carregarHospedes(),
      error: (err) => console.error('Erro ao deletar hóspede', err)
    });
  }

  editarHospede(id: number): void {
    this.router.navigate([`/editar/${id}`]); // 👈 agora funciona
  }
}
