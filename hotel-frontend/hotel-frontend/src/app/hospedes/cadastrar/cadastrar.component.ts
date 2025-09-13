import { Component } from '@angular/core';
import { HospedeService } from '../../services/hospede';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  hospede = {
  nome: '',
  cpf: '',
  rg: '',
  telefone: ''
  }

  constructor(private hospedeService: HospedeService) {}

  cadastrarHospede() {
    this.hospedeService.cadastrar(this.hospede).subscribe({
      next: () => {
        console.log('Hospede cadastrado!');
        this.hospede = { nome: '', cpf: '', rg: '', telefone: '' }; // limpa o formulário
      },
      error: (err) => console.error('Erro ao cadastrar', err)
    });
  }
}
