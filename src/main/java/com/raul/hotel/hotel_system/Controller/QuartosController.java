
package com.raul.hotel.hotel_system.Controller;

import com.raul.hotel.hotel_system.Model.Quartos;
import com.raul.hotel.hotel_system.Repository.QuartosRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/quartos")
public class QuartosController {
    
    @Autowired
    public QuartosRepository quartosRepository;
    
    //LISTANDO
    @GetMapping
    public List<Quartos> listar(){
        return quartosRepository.findAll();
    }
    
    //BUSCANDO POR ID 
    @GetMapping("/{id}")
    public Optional<Quartos> buscar(@PathVariable Integer id){
        return quartosRepository.findById(id);
    }
    
    @PostMapping
    public Quartos cadastrar(@RequestBody Quartos quartos){
        return quartosRepository.save(quartos);
    }
    
    @PutMapping("/{id}")
    public Quartos atualizar(@PathVariable Integer id, @RequestBody Quartos quartos){
        return quartosRepository.save(quartos);
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id){
        quartosRepository.deleteById(id);
    }
            
    
    
    
}
