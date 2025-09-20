
package com.raul.hotel.hotel_system.Service;

import com.raul.hotel.hotel_system.Model.Quartos;
import com.raul.hotel.hotel_system.Repository.QuartosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuartoService {

    @Autowired
    private QuartosRepository quartosRepository;

    public Quartos cadastrarQuartos(Quartos quarto, int andar) {
        quarto.setNumero(gerarNumeroQuarto(andar));
        return quartosRepository.save(quarto);
    }

    private String gerarNumeroQuarto(int andar) {
        
        return andar + "01"; 
    }
    
    
}



