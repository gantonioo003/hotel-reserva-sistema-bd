package com.hotel.reserva.controller;

import com.hotel.reserva.model.Manutencao;
import com.hotel.reserva.repository.ManutencaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/manutencoes")
@CrossOrigin(origins = "*")
public class ManutencaoController {

    @Autowired
    private ManutencaoRepository manutencaoRepository;

    @GetMapping
    public List<Manutencao> listarTodas() {
        return manutencaoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Manutencao> buscarPorId(@PathVariable Integer id) {
        return manutencaoRepository.findById(id);
    }

    @PostMapping
    public Manutencao criar(@RequestBody Manutencao manutencao) {
        return manutencaoRepository.save(manutencao);
    }

    @PutMapping("/{id}")
    public Manutencao atualizar(@PathVariable Integer id, @RequestBody Manutencao atualizada) {
        atualizada.setId(id);
        return manutencaoRepository.save(atualizada);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        manutencaoRepository.deleteById(id);
    }
}
