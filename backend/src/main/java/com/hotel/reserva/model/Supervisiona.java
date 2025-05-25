package com.hotel.reserva.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Supervisiona")
@IdClass(SupervisionaId.class)
public class Supervisiona {

    @Id
    @Column(name = "idFuncionario_supervisor")
    private Integer idFuncionarioSupervisor;

    @Id
    @Column(name = "idFuncionario_supervisionado")
    private Integer idFuncionarioSupervisionado;

    // Getters e Setters
    public Integer getIdFuncionarioSupervisor() {
        return idFuncionarioSupervisor;
    }

    public void setIdFuncionarioSupervisor(Integer idFuncionarioSupervisor) {
        this.idFuncionarioSupervisor = idFuncionarioSupervisor;
    }

    public Integer getIdFuncionarioSupervisionado() {
        return idFuncionarioSupervisionado;
    }

    public void setIdFuncionarioSupervisionado(Integer idFuncionarioSupervisionado) {
        this.idFuncionarioSupervisionado = idFuncionarioSupervisionado;
    }
}
