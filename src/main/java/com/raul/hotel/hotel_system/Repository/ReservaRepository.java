
package com.raul.hotel.hotel_system.Repository;

import com.raul.hotel.hotel_system.Model.Reserva;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservaRepository extends JpaRepository<Reserva, Integer>{

    public List<Reserva> findByQuartos_IdAndDataFimAfterAndDataInicioBefore(Integer id, LocalDateTime data_inicio, LocalDateTime data_fim);
    public List<Reserva> findByDataFimBefore(LocalDateTime dataFim);
}
