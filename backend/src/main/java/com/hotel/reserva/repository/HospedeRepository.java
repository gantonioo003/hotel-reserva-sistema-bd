package com.hotel.reserva.repository;

import com.hotel.reserva.model.Hospede;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospedeRepository extends JpaRepository<Hospede, Integer> {
}
