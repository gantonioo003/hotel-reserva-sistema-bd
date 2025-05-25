package com.hotel.reserva.controller;

import com.hotel.reserva.model.Supervisiona;
import com.hotel.reserva.model.SupervisionaId;
import com.hotel.reserva.repository.SupervisionaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/supervisiona")
@CrossOrigin(origins = "*")
public class SupervisionaController {

    @Autowired
    private SupervisionaRepository supervisionaRepository;

    @GetMapping
    public List<Supervisiona> listarTodos() {
        return supervisionaRepository.findAll();
    }

    @PostMapping
    public Supervisiona criar(@RequestBody Supervisiona supervisiona) {
        return supervisionaRepository.save(supervisiona);
    }

    @DeleteMapping("/{idSupervisor}/{idSupervisionado}")
    public void deletar(@PathVariable Integer idSupervisor, @PathVariable Integer idSupervisionado) {
        SupervisionaId id = new SupervisionaId(idSupervisor, idSupervisionado);
        supervisionaRepository.deleteById(id);
    }
}
