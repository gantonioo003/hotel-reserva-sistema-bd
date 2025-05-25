package com.hotel.reserva.controller;

import com.hotel.reserva.model.Executa;
import com.hotel.reserva.model.ExecutaId;
import com.hotel.reserva.repository.ExecutaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/executa")
@CrossOrigin(origins = "*")
public class ExecutaController {

    @Autowired
    private ExecutaRepository executaRepository;

    @GetMapping
    public List<Executa> listarTodos() {
        return executaRepository.findAll();
    }

    @PostMapping
    public Executa criar(@RequestBody Executa executa) {
        return executaRepository.save(executa);
    }

    @DeleteMapping
    public void deletar(@RequestBody Executa executa) {
        ExecutaId id = new ExecutaId(
            executa.getIdFuncionario(),
            executa.getIdManutencao(),
            executa.getIdQuarto()
        );
        executaRepository.deleteById(id);
    }
}
