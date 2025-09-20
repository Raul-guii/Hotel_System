import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Reserva{
  id?: number;
  numero: number;
  dataInicio: string;
  dataFim: string;
  status: string;
  quartos: any;
  hospede: any;
}

@Injectable({ providedIn: 'root' })
export class ReservaService {
  private baseUrl: string = 'http://localhost:8080';
  
  private apiUrl = 'http://localhost:8080/reservas';

  constructor(private http: HttpClient) {}

  listarReserva(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  buscarReservaPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  cadastrarReserva(reserva: any) {
    return this.http.post('http://localhost:8080/reservas', reserva);
  }

  editarReserva(id: number, dataInicio: string, dataFim: string): Observable<Reserva> {
    const body = { dataInicio, dataFim };
    return this.http.put<Reserva>(`${this.apiUrl}/${id}`, body);
  }

  deletarReserva(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

    listarQuartos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/quartos`);
  }
}

