package com.hotel.reserva.controller;

import com.hotel.reserva.model.Telefone;
import com.hotel.reserva.repository.TelefoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/telefones")
@CrossOrigin(origins = "*")
public class TelefoneController {

    @Autowired
    private TelefoneRepository telefoneRepository;

    @GetMapping
    public List<Telefone> listarTodos() {
        return telefoneRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Telefone> buscarPorId(@PathVariable Integer id) {
        return telefoneRepository.findById(id);
    }

    @PostMapping
    public Telefone criar(@RequestBody Telefone telefone) {
        return telefoneRepository.save(telefone);
    }

    @PutMapping("/{id}")
    public Telefone atualizar(@PathVariable Integer id, @RequestBody Telefone telefoneAtualizado) {
        telefoneAtualizado.setTelefonePK(id);
        return telefoneRepository.save(telefoneAtualizado);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        telefoneRepository.deleteById(id);
    }
}
