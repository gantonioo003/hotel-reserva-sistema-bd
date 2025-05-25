package com.hotel.reserva.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Telefone")
public class Telefone {

    @Id
    @Column(name = "telefone_PK")
    private Integer telefonePK;

    @Column(name = "telefone")
    private String telefone;

    @Column(name = "idPessoa")
    private Integer idPessoa;

    // Getters e Setters
    public Integer getTelefonePK() {
        return telefonePK;
    }

    public void setTelefonePK(Integer telefonePK) {
        this.telefonePK = telefonePK;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Integer getIdPessoa() {
        return idPessoa;
    }

    public void setIdPessoa(Integer idPessoa) {
        this.idPessoa = idPessoa;
    }
}
