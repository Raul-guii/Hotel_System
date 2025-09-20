import { Component } from '@angular/core';
import { HospedeService } from '../../services/hospede';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarHospedeComponent {
  hospede = {
  nome: '',
  cpf: '',
  rg: '',
  telefone: ''
  }

  constructor(private hospedeService: HospedeService,
              private router: Router
  ) {}

  cadastrarHospede() {
    this.hospedeService.cadastrarHospede(this.hospede).subscribe({
      next: () => {
        console.log('Hospede cadastrado!');

        this.router.navigate(['/quartos/cadastrar'], { state: { hospede: this.hospede } });

        this.hospede = { nome: '', cpf: '', rg: '', telefone: '' }; 
      },
      error: (err) => console.error('Erro ao cadastrar', err)
    });
  }
}
