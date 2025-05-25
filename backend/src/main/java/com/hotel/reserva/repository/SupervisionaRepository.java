package com.hotel.reserva.repository;

import com.hotel.reserva.model.Supervisiona;
import com.hotel.reserva.model.SupervisionaId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupervisionaRepository extends JpaRepository<Supervisiona, SupervisionaId> {
}
