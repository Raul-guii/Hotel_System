import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Hospede {
  id?: number;
  nome: string;
  cpf: string;
  rg: string;
  telefone: string;
}

export interface Quarto {
  id: number;
  numero: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class HospedeService {
  private apiUrl = 'http://localhost:8080/hospedes';
  constructor(private http: HttpClient) {}

  listarHospede(): Observable<Hospede[]> {
  return this.http.get<Hospede[]>('http://localhost:8080/hospedes');
  }

  cadastrarHospede(hospede:Omit<Hospede, 'id'>): Observable<Hospede> {
    return this.http.post<Hospede>(this.apiUrl, hospede);
  }

  editarHospede(hospede: Hospede) {
  return this.http.put(`http://localhost:8080/hospedes/${hospede.id}`, hospede);
}

  deletarHospede(id: number) {
    return this.http.delete(`http://localhost:8080/hospedes/${id}`);
  }

  buscarHospedePorId(id: number): Observable<Hospede> {
  return this.http.get<Hospede>(`${this.apiUrl}/${id}`);
  }
}
