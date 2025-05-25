package com.hotel.reserva.controller;

import com.hotel.reserva.model.Pessoa;
import com.hotel.reserva.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pessoas")
@CrossOrigin(origins = "*") // permite acesso do frontend
public class PessoaController {

    @Autowired
    private PessoaRepository pessoaRepository;

    @GetMapping
    public List<Pessoa> listarTodas() {
        return pessoaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Pessoa> buscarPorId(@PathVariable Integer id) {
        return pessoaRepository.findById(id);
    }

    @PostMapping
    public Pessoa criar(@RequestBody Pessoa pessoa) {
        return pessoaRepository.save(pessoa);
    }

    @PutMapping("/{id}")
    public Pessoa atualizar(@PathVariable Integer id, @RequestBody Pessoa pessoaAtualizada) {
        pessoaAtualizada.setIdPessoa(id);
        return pessoaRepository.save(pessoaAtualizada);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        pessoaRepository.deleteById(id);
    }
}
