package com.hotel.reserva.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "Quarto")
public class Quarto {

    @Id
    @Column(name = "idQuarto")
    private Integer idQuarto;

    @Column(name = "numero")
    private String numero;

    @Column(name = "tipo")
    private String tipo;

    @Column(name = "capacidade")
    private Integer capacidade;

    @Column(name = "valorDiaria")
    private BigDecimal valorDiaria;

    @Column(name = "status")
    private String status;

    // Getters e Setters
    public Integer getIdQuarto() {
        return idQuarto;
    }

    public void setIdQuarto(Integer idQuarto) {
        this.idQuarto = idQuarto;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getCapacidade() {
        return capacidade;
    }

    public void setCapacidade(Integer capacidade) {
        this.capacidade = capacidade;
    }

    public BigDecimal getValorDiaria() {
        return valorDiaria;
    }

    public void setValorDiaria(BigDecimal valorDiaria) {
        this.valorDiaria = valorDiaria;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
