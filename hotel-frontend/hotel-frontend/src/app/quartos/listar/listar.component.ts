import { Component, OnInit } from '@angular/core';
import { QuartoService, Quarto } from '../../services/quarto';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarQuartoComponent {
 quarto: Quarto[] = [];

  constructor(
    private quartoService: QuartoService,
    private router: Router   
  ) {}

  ngOnInit(): void {
    this.carregarQuartos();
  }

  carregarQuartos() {
    this.quartoService.listarQuarto().subscribe({
      next: (dados) => this.quarto = dados,
      error: (err) => console.error('Erro ao buscar hóspedes', err)
    });
  }

  deletarQuarto(id: number) {
    this.quartoService.deletarQuarto(id).subscribe({
      next: () => this.carregarQuartos(),
      error: (err) => console.error('Erro ao deletar hóspede', err)
    });
  }

  editarQuarto(id: number): void {
    this.router.navigate([`/quartos/editar`, id]); 
  }
}
