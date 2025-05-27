package com.hotel.reserva.controller;

import com.hotel.reserva.model.*;
import com.hotel.reserva.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pessoas")
@CrossOrigin(origins = "*")
public class PessoaController {

    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private HospedeRepository hospedeRepository;

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @Autowired
    private PossuiRepository possuiRepository;

    @Autowired
    private TelefoneRepository telefoneRepository;

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

    @DeleteMapping("/completo/{id}")
    public ResponseEntity<Void> deletarComDependencias(@PathVariable Integer id) {
        List<Reserva> reservas = reservaRepository.findByIdHospede(id);

        for (Reserva reserva : reservas) {
            Integer idReserva = reserva.getIdReserva();

            // Deleta avaliações
            List<Avaliacao> avaliacoes = avaliacaoRepository.findAll().stream()
                    .filter(a -> a.getIdReserva().equals(idReserva))
                    .toList();
            avaliacaoRepository.deleteAll(avaliacoes);

            // Deleta possui
            List<Possui> possuis = possuiRepository.findAll().stream()
                    .filter(p -> p.getIdReserva().equals(idReserva))
                    .toList();
            possuiRepository.deleteAll(possuis);
        }

        // Deleta reservas
        reservaRepository.deleteAll(reservas);

        // Deleta hóspede e funcionário
        hospedeRepository.deleteById(id);
        funcionarioRepository.deleteById(id);

        // Deleta telefones
        List<Telefone> telefones = telefoneRepository.findAll().stream()
                .filter(t -> t.getIdPessoa().equals(id))
                .toList();
        telefoneRepository.deleteAll(telefones);

        // Deleta pessoa
        pessoaRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }
}