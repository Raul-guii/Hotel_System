
package com.raul.hotel.hotel_system.repository;


import com.raul.hotel.hotel_system.Model.Hospede;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospedeRepository extends JpaRepository<Hospede, Integer>{
    
}
