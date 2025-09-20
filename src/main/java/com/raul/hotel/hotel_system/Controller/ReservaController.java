
package com.raul.hotel.hotel_system.Controller;

import com.raul.hotel.hotel_system.Model.Hospede;
import com.raul.hotel.hotel_system.Model.Quartos;
import com.raul.hotel.hotel_system.Model.Reserva;
import com.raul.hotel.hotel_system.Model.Status.StatusQuarto;
import com.raul.hotel.hotel_system.Model.Status.StatusReserva;
import com.raul.hotel.hotel_system.Repository.QuartosRepository;
import com.raul.hotel.hotel_system.Repository.ReservaRepository;
import com.raul.hotel.hotel_system.repository.HospedeRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservas")
public class ReservaController {
    
    @Autowired
    public ReservaRepository reservaRepository;
    
    @Autowired
    private QuartosRepository quartosRepository;

    @Autowired
    private HospedeRepository hospedeRepository;
    
    //LISTABDO
    @GetMapping
    public List<Reserva> listar(){
        return reservaRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Reserva buscar(@PathVariable Integer id){
        return reservaRepository.findById(id).orElseThrow(() -> new
         RuntimeException("Reserva não encontrada"));
    }
    
    
    @PostMapping
    public Reserva cadastrar(@RequestBody Reserva reserva){
        try{
       Quartos quartoExistente = quartosRepository.findById(reserva.getQuartos().getId())
        .orElseThrow(() -> new RuntimeException("Quarto não encontrado!"));

       Hospede hospedeExistente = hospedeRepository.findById(reserva.getHospede().getId())
        .orElseThrow(() -> new RuntimeException("Hospede não encontrado!")); 
       
       List<Reserva> reservaExistentes = reservaRepository.findByQuartos_IdAndDataFimAfterAndDataInicioBefore(
               reserva.getQuartos().getId(),
               reserva.getDataInicio(),
               reserva.getDataFim()
       );
       if(!reservaExistentes.isEmpty()){
           throw new RuntimeException("O quarto já está ocupado nesse período!! ");
       }      
           reserva.setQuartos(quartoExistente);
           reserva.setHospede(hospedeExistente);
           reserva.setStatus(StatusReserva.OCUPADO);          
        return reservaRepository.save(reserva);
        } catch(Exception e){
            e.printStackTrace(); 
            throw e; 
        }
    }
    
    

    @PutMapping("/{id}")
    public ResponseEntity<Reserva> atualizarReserva(@PathVariable Integer id, @RequestBody Reserva reservaAtualizada){
        Optional<Reserva> reservaOptional = reservaRepository.findById(id);
        
        if (reservaOptional.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        Reserva reservaExistente = reservaOptional.get();
    
        reservaExistente.setDataInicio(reservaAtualizada.getDataInicio());
        reservaExistente.setDataFim(reservaAtualizada.getDataFim());

        Reserva reservaSalva = reservaRepository.save(reservaExistente);

        return ResponseEntity.ok(reservaSalva);
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id){
    Reserva r = reservaRepository.findById(id).orElseThrow(() -> new RuntimeException("Reserva não encontrada!"));
    r.getQuartos().setStatus(StatusQuarto.DISPONIVEL);
    quartosRepository.save(r.getQuartos());
    reservaRepository.deleteById(id);
    }
}
