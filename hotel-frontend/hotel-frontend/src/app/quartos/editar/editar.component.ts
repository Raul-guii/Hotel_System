import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { QuartoService, Quarto } from '../../services/quarto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarQuartoComponent {
 quarto: Quarto = {} as Quarto;

  constructor(private quartoService: QuartoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.quartoService.buscarQuartoPorId(id).subscribe(data => this.quarto = data);
  }

  editarQuarto() {
    this.quartoService.editarQuarto(this.quarto).subscribe(() => {
      this.router.navigate(['/quartos/listar']);
    });
  }
}
