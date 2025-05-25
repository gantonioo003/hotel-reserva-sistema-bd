package com.hotel.reserva.controller;

import com.hotel.reserva.model.Reserva;
import com.hotel.reserva.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin(origins = "*")
public class ReservaController {

    @Autowired
    private ReservaRepository reservaRepository;

    @GetMapping
    public List<Reserva> listarTodas() {
        return reservaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Reserva> buscarPorId(@PathVariable Integer id) {
        return reservaRepository.findById(id);
    }

    @PostMapping
    public Reserva criar(@RequestBody Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    @PutMapping("/{id}")
    public Reserva atualizar(@PathVariable Integer id, @RequestBody Reserva reservaAtualizada) {
        reservaAtualizada.setIdReserva(id);
        return reservaRepository.save(reservaAtualizada);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        reservaRepository.deleteById(id);
    }
}
