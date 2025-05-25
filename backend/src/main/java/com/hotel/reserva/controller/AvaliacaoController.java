package com.hotel.reserva.controller;

import com.hotel.reserva.model.Avaliacao;
import com.hotel.reserva.repository.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/avaliacoes")
@CrossOrigin(origins = "*")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @GetMapping
    public List<Avaliacao> listarTodas() {
        return avaliacaoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Avaliacao> buscarPorId(@PathVariable Integer id) {
        return avaliacaoRepository.findById(id);
    }

    @PostMapping
    public Avaliacao criar(@RequestBody Avaliacao avaliacao) {
        return avaliacaoRepository.save(avaliacao);
    }

    @PutMapping("/{id}")
    public Avaliacao atualizar(@PathVariable Integer id, @RequestBody Avaliacao avaliacaoAtualizada) {
        avaliacaoAtualizada.setIdAvaliacao(id);
        return avaliacaoRepository.save(avaliacaoAtualizada);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        avaliacaoRepository.deleteById(id);
    }
}
