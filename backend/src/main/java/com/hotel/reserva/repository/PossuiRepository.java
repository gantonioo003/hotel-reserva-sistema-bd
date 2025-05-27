package com.hotel.reserva.repository;

import com.hotel.reserva.model.Possui;
import com.hotel.reserva.model.PossuiId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PossuiRepository extends JpaRepository<Possui, PossuiId> {
    List<Possui> findByIdReserva(Integer idReserva);
}