package com.hotel.reserva.controller;

import com.hotel.reserva.model.Reserva;
import com.hotel.reserva.model.Quarto;
import com.hotel.reserva.model.Pagamento;
import com.hotel.reserva.repository.ReservaRepository;
import com.hotel.reserva.repository.QuartoRepository;
import com.hotel.reserva.repository.PagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin(origins = "*")
public class ReservaController {

    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private QuartoRepository quartoRepository;

    @Autowired
    private PagamentoRepository pagamentoRepository;

    @PostMapping
    public Reserva criar(@RequestBody Reserva reserva) {
        Integer idQuarto = reserva.getIdQuarto();
        Optional<Quarto> quartoOpt = quartoRepository.findById(idQuarto);

        if (quartoOpt.isEmpty()) {
            throw new RuntimeException("Quarto não encontrado");
        }

        Quarto quarto = quartoOpt.get();

        // Atualiza status do quarto
        quarto.setStatus("reservado");
        quartoRepository.save(quarto);

        // Cria e salva o pagamento
        Pagamento pagamento = new Pagamento();
        pagamento.setValor(quarto.getValorDiaria());
        pagamento.setData(reserva.getDataEntrada());
        pagamento.setStatus("pago");
        pagamento.setForma(reserva.getFormaPagamento());

        pagamento = pagamentoRepository.save(pagamento); // já devolve com ID gerado

        // Associa o pagamento à reserva
        reserva.setIdPagamento(pagamento.getIdPagamento());

        return reservaRepository.save(reserva);
    }

    @GetMapping
    public List<Reserva> listarTodas() {
        return reservaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Reserva> buscarPorId(@PathVariable Integer id) {
        return reservaRepository.findById(id);
    }

    @PutMapping("/{id}")
    public Reserva atualizar(@PathVariable Integer id, @RequestBody Reserva reservaAtualizada) {
        reservaAtualizada.setIdReserva(id);
        return reservaRepository.save(reservaAtualizada);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        reservaRepository.deleteById(id);
    }
}