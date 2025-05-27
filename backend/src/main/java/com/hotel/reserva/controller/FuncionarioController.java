package com.hotel.reserva.controller;

import com.hotel.reserva.model.Funcionario;
import com.hotel.reserva.model.Executa;
import com.hotel.reserva.model.Supervisiona;
import com.hotel.reserva.repository.FuncionarioRepository;
import com.hotel.reserva.repository.ExecutaRepository;
import com.hotel.reserva.repository.SupervisionaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/funcionarios")
@CrossOrigin(origins = "*")
public class FuncionarioController {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @Autowired
    private ExecutaRepository executaRepository;

    @Autowired
    private SupervisionaRepository supervisionaRepository;

    @GetMapping
    public List<Funcionario> listarTodos() {
        return funcionarioRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Funcionario> buscarPorId(@PathVariable Integer id) {
        return funcionarioRepository.findById(id);
    }

    @PostMapping
    public Funcionario criar(@RequestBody Funcionario funcionario) {
        return funcionarioRepository.save(funcionario);
    }

    @PutMapping("/{id}")
    public Funcionario atualizar(@PathVariable Integer id, @RequestBody Funcionario funcionarioAtualizado) {
        funcionarioAtualizado.setIdPessoa(id);
        return funcionarioRepository.save(funcionarioAtualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        // Apagar registros de EXECUTA onde o funcionário está envolvido
        List<Executa> execucoes = executaRepository.findAll().stream()
            .filter(e -> e.getIdFuncionario().equals(id))
            .toList();
        executaRepository.deleteAll(execucoes);

        // Apagar registros de SUPERVISIONA onde o funcionário é supervisor
        List<Supervisiona> supervisionando = supervisionaRepository.findAll().stream()
            .filter(s -> s.getIdFuncionarioSupervisor().equals(id))
            .toList();
        supervisionaRepository.deleteAll(supervisionando);

        // Apagar registros de SUPERVISIONA onde o funcionário é supervisionado
        List<Supervisiona> supervisionado = supervisionaRepository.findAll().stream()
            .filter(s -> s.getIdFuncionarioSupervisionado().equals(id))
            .toList();
        supervisionaRepository.deleteAll(supervisionado);

        // Por fim, apagar o funcionário
        funcionarioRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }
}