package com.hotel.reserva.repository;

import com.hotel.reserva.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReservaRepository extends JpaRepository<Reserva, Integer> {
    List<Reserva> findByIdHospede(Integer idHospede); // aqui está o nome EXATO do campo
}