package com.hotel.reserva.repository;

import com.hotel.reserva.model.Executa;
import com.hotel.reserva.model.ExecutaId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExecutaRepository extends JpaRepository<Executa, ExecutaId> {
}
