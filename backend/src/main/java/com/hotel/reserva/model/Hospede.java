package com.hotel.reserva.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Hospede")
public class Hospede {

    @Id
    @Column(name = "idPessoa")
    private Integer idPessoa;

    // Getters e Setters
    public Integer getIdPessoa() {
        return idPessoa;
    }

    public void setIdPessoa(Integer idPessoa) {
        this.idPessoa = idPessoa;
    }
}
