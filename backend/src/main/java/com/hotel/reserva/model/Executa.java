package com.hotel.reserva.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Executa")
@IdClass(ExecutaId.class)
public class Executa {

    @Id
    @Column(name = "idFuncionario")
    private Integer idFuncionario;

    @Id
    @Column(name = "idManutencao")
    private Integer idManutencao;

    @Id
    @Column(name = "idQuarto")
    private Integer idQuarto;

    // Getters e Setters
    public Integer getIdFuncionario() {
        return idFuncionario;
    }

    public void setIdFuncionario(Integer idFuncionario) {
        this.idFuncionario = idFuncionario;
    }

    public Integer getIdManutencao() {
        return idManutencao;
    }

    public void setIdManutencao(Integer idManutencao) {
        this.idManutencao = idManutencao;
    }

    public Integer getIdQuarto() {
        return idQuarto;
    }

    public void setIdQuarto(Integer idQuarto) {
        this.idQuarto = idQuarto;
    }
}
