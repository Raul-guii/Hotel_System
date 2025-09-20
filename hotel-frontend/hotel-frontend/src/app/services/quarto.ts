import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum StatusQuarto {
  DISPONIVEL = 'DISPONIVEL',
  OCUPADO = 'OCUPADO',
  MANUTENCAO = 'MANUTENCAO',
}

export interface Quarto{
  id?: number;
  numero: string;
  status: StatusQuarto;
}

@Injectable({
  providedIn: 'root'
})
export class QuartoService {
  private apiUrl = 'http://localhost:8080/quartos';
  constructor(private http: HttpClient) {}

  listarQuarto(): Observable<Quarto[]> {
  return this.http.get<Quarto[]>('http://localhost:8080/quartos');
  }

  cadastrarQuarto(quarto:Omit<Quarto, 'id'>): Observable<Quarto> {
    return this.http.post<Quarto>(this.apiUrl, quarto);
  }

  editarQuarto(Quarto: Quarto) {
  return this.http.put(`http://localhost:8080/quartos/${Quarto.id}`, Quarto);
}

  deletarQuarto(id: number) {
    return this.http.delete(`http://localhost:8080/quartos/${id}`);
  }

  buscarQuartoPorId(id: number): Observable<Quarto> {
  return this.http.get<Quarto>(`${this.apiUrl}/${id}`);
  }
}