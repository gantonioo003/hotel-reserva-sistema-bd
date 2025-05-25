package com.hotel.reserva.controller;

import com.hotel.reserva.model.Quarto;
import com.hotel.reserva.repository.QuartoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/quartos")
@CrossOrigin(origins = "*")
public class QuartoController {

    @Autowired
    private QuartoRepository quartoRepository;

    @GetMapping
    public List<Quarto> listarTodos() {
        return quartoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Quarto> buscarPorId(@PathVariable Integer id) {
        return quartoRepository.findById(id);
    }

    @PostMapping
    public Quarto criar(@RequestBody Quarto quarto) {
        return quartoRepository.save(quarto);
    }

    @PutMapping("/{id}")
    public Quarto atualizar(@PathVariable Integer id, @RequestBody Quarto quartoAtualizado) {
        quartoAtualizado.setIdQuarto(id);
        return quartoRepository.save(quartoAtualizado);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        quartoRepository.deleteById(id);
    }
}
