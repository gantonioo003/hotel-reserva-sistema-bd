package com.hotel.reserva.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "Manutencao")
public class Manutencao {

    @Id
    @Column(name = "id_manutencao")
    private Integer id;

    @Column(name = "data")
    private LocalDate data;

    @Column(name = "tipo_servico")
    private String tipoServico;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "custo")
    private BigDecimal custo;

    // Getters e Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getTipoServico() {
        return tipoServico;
    }

    public void setTipoServico(String tipoServico) {
        this.tipoServico = tipoServico;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public BigDecimal getCusto() {
        return custo;
    }

    public void setCusto(BigDecimal custo) {
        this.custo = custo;
    }
}
