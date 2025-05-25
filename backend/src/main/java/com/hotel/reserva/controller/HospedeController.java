package com.hotel.reserva.controller;

import com.hotel.reserva.model.Hospede;
import com.hotel.reserva.repository.HospedeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hospedes")
@CrossOrigin(origins = "*")
public class HospedeController {

    @Autowired
    private HospedeRepository hospedeRepository;

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
    public void deletar(@PathVariable Integer id) {
        hospedeRepository.deleteById(id);
    }
}
