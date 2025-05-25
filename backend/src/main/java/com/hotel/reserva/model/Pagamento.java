package com.hotel.reserva.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Pagamento")
public class Pagamento {

    @Id
    @Column(name = "idPagamento")
    private Integer idPagamento;

    @Column(name = "forma")
    private String forma;

    @Column(name = "valor")
    private Double valor;

    @Column(name = "data")
    private LocalDate data;

    @Column(name = "status")
    private String status;

    // Getters e Setters
    public Integer getIdPagamento() {
        return idPagamento;
    }

    public void setIdPagamento(Integer idPagamento) {
        this.idPagamento = idPagamento;
    }

    public String getForma() {
        return forma;
    }

    public void setForma(String forma) {
        this.forma = forma;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
