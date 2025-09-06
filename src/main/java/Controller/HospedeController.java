
package Controller;

import Model.Hospede;
import Repository.HospedeRepository;
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
@RequestMapping("/hospedes")
public class HospedeController {
    
    @Autowired
    private HospedeRepository hospedeRepository;
    
    //LISTANDO TODOS
    @GetMapping
    public List<Hospede> listar(){
        return hospedeRepository.findAll();
    }
    
    //BUSCANDO POR ID
    @GetMapping("/{id}")
    public Optional<Hospede> buscar(@PathVariable Integer id){
        return hospedeRepository.findById(id);
    }
    
    //CADASTRO
    @PostMapping
    public Hospede cadastrar(@RequestBody Hospede hospede){
        return hospedeRepository.save(hospede);
    }
    
    //ATUALIZAR
    @PutMapping("/{id}")
    public Hospede atualizar(@PathVariable Integer id, @RequestBody Hospede hospede){
        hospede.setId(id);
        return hospedeRepository.save(hospede);
    }
    
    //DELETAR
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id){
        hospedeRepository.deleteById(id);
    }
}
