import { Component } from '@angular/core';
import { HospedeService, Hospede } from '../../services/hospede';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarHospedeComponent {
   hospede: Hospede = {} as Hospede;

  constructor(private hospedeService: HospedeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.hospedeService.buscarHospedePorId(id).subscribe(data => this.hospede = data);
  }

  salvar() {
    this.hospedeService.editarHospede(this.hospede).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }
}
