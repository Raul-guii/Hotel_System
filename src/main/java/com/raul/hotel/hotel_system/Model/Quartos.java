
package com.raul.hotel.hotel_system.Model;

import com.raul.hotel.hotel_system.Model.Status.StatusQuarto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "quartos")
public class Quartos {
    
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Integer id;
               
     @Column(nullable = false)
     private String numero;
     
     @Enumerated(EnumType.STRING)
     private StatusQuarto status;
     
     public Quartos(){
         
     }

    public Quartos(Integer id, String numero, StatusQuarto status) {
        this.id = id;
        this.numero = numero;
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public StatusQuarto getStatus() {
        return status;
    }

    public void setStatus(StatusQuarto status) {
        this.status = status;
    }
     
    
     
}
