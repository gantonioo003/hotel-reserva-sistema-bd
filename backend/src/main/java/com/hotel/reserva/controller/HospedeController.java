package com.hotel.reserva.controller;

import com.hotel.reserva.model.Hospede;
import com.hotel.reserva.model.Possui;
import com.hotel.reserva.model.Reserva;
import com.hotel.reserva.model.Avaliacao;
import com.hotel.reserva.repository.HospedeRepository;
import com.hotel.reserva.repository.ReservaRepository;
import com.hotel.reserva.repository.AvaliacaoRepository;
import com.hotel.reserva.repository.PossuiRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hospedes")
@CrossOrigin(origins = "*")
public class HospedeController {

    @Autowired
    private HospedeRepository hospedeRepository;

    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @Autowired
    private PossuiRepository possuiRepository;

    @GetMapping
    public List<Hospede> listarTodos() {
        return hospedeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Hospede> buscarPorId(@PathVariable Integer id) {
        return hospedeRepository.findById(id);
    }

    @PostMapping
    public Hospede criar(@RequestBody Hospede hospede) {
        return hospedeRepository.save(hospede);
    }

    @PutMapping("/{id}")
    public Hospede atualizar(@PathVariable Integer id, @RequestBody Hospede hospedeAtualizado) {
        hospedeAtualizado.setIdPessoa(id);
        return hospedeRepository.save(hospedeAtualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        // Buscar reservas do hóspede
        List<Reserva> reservas = reservaRepository.findByIdHospede(id);

        for (Reserva reserva : reservas) {
            Integer idReserva = reserva.getIdReserva();

            // Deletar avaliações da reserva
            List<Avaliacao> avaliacoes = avaliacaoRepository.findAll().stream()
                .filter(a -> a.getIdReserva().equals(idReserva))
                .toList();
            avaliacaoRepository.deleteAll(avaliacoes);

            // Deletar registros da tabela Possui da reserva
            List<Possui> possuis = possuiRepository.findByIdReserva(idReserva);
            possuiRepository.deleteAll(possuis);
        }

        // Deletar reservas
        reservaRepository.deleteAll(reservas);

        // Deletar hóspede
        hospedeRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }
}