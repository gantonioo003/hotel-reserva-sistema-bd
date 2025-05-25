package com.hotel.reserva.controller;

import com.hotel.reserva.model.Possui;
import com.hotel.reserva.model.PossuiId;
import com.hotel.reserva.repository.PossuiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/possui")
@CrossOrigin(origins = "*")
public class PossuiController {

    @Autowired
    private PossuiRepository possuiRepository;

    @GetMapping
    public List<Possui> listarTodos() {
        return possuiRepository.findAll();
    }

    @PostMapping
    public Possui criar(@RequestBody Possui possui) {
        return possuiRepository.save(possui);
    }

    @DeleteMapping("/{idServico}/{idReserva}")
    public void deletar(@PathVariable Integer idServico, @PathVariable Integer idReserva) {
        PossuiId id = new PossuiId(idServico, idReserva);
        possuiRepository.deleteById(id);
    }
}
