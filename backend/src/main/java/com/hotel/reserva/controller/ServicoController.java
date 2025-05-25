package com.hotel.reserva.controller;

import com.hotel.reserva.model.Servico;
import com.hotel.reserva.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/servicos")
@CrossOrigin(origins = "*")
public class ServicoController {

    @Autowired
    private ServicoRepository servicoRepository;

    @GetMapping
    public List<Servico> listarTodos() {
        return servicoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Servico> buscarPorId(@PathVariable Integer id) {
        return servicoRepository.findById(id);
    }

    @PostMapping
    public Servico criar(@RequestBody Servico servico) {
        return servicoRepository.save(servico);
    }

    @PutMapping("/{id}")
    public Servico atualizar(@PathVariable Integer id, @RequestBody Servico servicoAtualizado) {
        servicoAtualizado.setIdServico(id);
        return servicoRepository.save(servicoAtualizado);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        servicoRepository.deleteById(id);
    }
}
