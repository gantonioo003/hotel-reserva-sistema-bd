package com.hotel.reserva.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Possui")
@IdClass(PossuiId.class)
public class Possui {

    @Id
    @Column(name = "idServico")
    private Integer idServico;

    @Id
    @Column(name = "idReserva")
    private Integer idReserva;

    // Getters e Setters
    public Integer getIdServico() {
        return idServico;
    }

    public void setIdServico(Integer idServico) {
        this.idServico = idServico;
    }

    public Integer getIdReserva() {
        return idReserva;
    }

    public void setIdReserva(Integer idReserva) {
        this.idReserva = idReserva;
    }
}
