package com.hotel.reserva.repository;

import com.hotel.reserva.model.Telefone;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TelefoneRepository extends JpaRepository<Telefone, Integer> {
    List<Telefone> findByIdPessoa(Integer idPessoa);
}