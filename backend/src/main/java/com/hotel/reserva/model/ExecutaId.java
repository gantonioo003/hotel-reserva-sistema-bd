package com.hotel.reserva.model;

import java.io.Serializable;
import java.util.Objects;

public class ExecutaId implements Serializable {
    private Integer idFuncionario;
    private Integer idManutencao;
    private Integer idQuarto;

    public ExecutaId() {}

    public ExecutaId(Integer idFuncionario, Integer idManutencao, Integer idQuarto) {
        this.idFuncionario = idFuncionario;
        this.idManutencao = idManutencao;
        this.idQuarto = idQuarto;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ExecutaId)) return false;
        ExecutaId that = (ExecutaId) o;
        return Objects.equals(idFuncionario, that.idFuncionario) &&
               Objects.equals(idManutencao, that.idManutencao) &&
               Objects.equals(idQuarto, that.idQuarto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idFuncionario, idManutencao, idQuarto);
    }
}
