import { Component } from '@angular/core';
import { Quarto, QuartoService, StatusQuarto } from '../../services/quarto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarQuartoComponent {
    hospede: any;

    quarto: Omit<Quarto, 'id'> = {
    numero: '',
    status: StatusQuarto.OCUPADO
  };  

    bloco: string = '';
    quartosDisponiveis: string[] = [];
    quartoSelecionado: string = '';
  constructor(private quartoService: QuartoService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.hospede = nav?.extras?.state?.['hospede']; 
    console.log('Hospede recebido:', this.hospede); 
  }

 atualizarQuartos(): void {
    switch(this.bloco) {
      case 'A':
        this.quartosDisponiveis = ['A101', 'A102', 'A103'];
        break;
      case 'B':
        this.quartosDisponiveis = ['B101', 'B102', 'B103'];
        break;
      case 'C':
        this.quartosDisponiveis = ['C301', 'C302', 'C303'];
        break;
      default:
        this.quartosDisponiveis = [];
    }
  }

  cadastrarQuarto() {
    this.quarto.numero = this.quartoSelecionado;

    this.quartoService.cadastrarQuarto(this.quarto).subscribe({
      next: (quartoCriado: Quarto) => {
        console.log('Quarto cadastrado!', quartoCriado);

        this.router.navigate(['/reservas/cadastrar'], { 
        state: 
        { hospede: this.hospede, quarto: quartoCriado } 
        });

        this.quarto = { numero: '', status: StatusQuarto.OCUPADO };
        this.quartoSelecionado = '';
        this.quartosDisponiveis = [];
        this.bloco = '';
      },
      error: (err) => console.error('Erro ao cadastrar', err)
    });
  }
}
