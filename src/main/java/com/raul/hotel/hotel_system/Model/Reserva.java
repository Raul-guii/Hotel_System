
package com.raul.hotel.hotel_system.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.raul.hotel.hotel_system.Model.Status.StatusReserva;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "reservas")
public class Reserva {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private Integer numero;
    
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime dataInicio;
    
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime dataFim;
    
    @Enumerated(EnumType.STRING)
    private StatusReserva status;
    
    @ManyToOne
    @JoinColumn(name = "quartos_id")
    private Quartos quartos;
    
    @ManyToOne
    @JoinColumn(name = "hospede_id")
    private Hospede hospede;
    
    public Reserva(){
        
    }

    public Reserva(Integer id, Integer numero, LocalDateTime dataInicio, LocalDateTime dataFim, StatusReserva status, Quartos quartos, Hospede hospede) {
        this.id = id;
        this.numero = numero;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.status = status;
        this.quartos = quartos;
        this.hospede = hospede;
    }
    
    

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public LocalDateTime getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDateTime dataInicio) {
        this.dataInicio = dataInicio;
    }

    public LocalDateTime getDataFim() {
       return dataFim;
    }

    public void setDataFim(LocalDateTime dataFim) {
        this.dataFim = dataFim;
    }

    public StatusReserva getStatus() {
        return status;
    }

    public void setStatus(StatusReserva status) {
        this.status = status;
    }

    public Quartos getQuartos() {
        return quartos;
    }

    public void setQuartos(Quartos quartos) {
        this.quartos = quartos;
    }

    public Hospede getHospede() {
        return hospede;
    }

    public void setHospede(Hospede hospede) {
        this.hospede = hospede;
    }




    
    
    
}
