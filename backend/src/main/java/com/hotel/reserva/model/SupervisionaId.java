package com.hotel.reserva.model;

import java.io.Serializable;
import java.util.Objects;

public class SupervisionaId implements Serializable {
    private Integer idFuncionarioSupervisor;
    private Integer idFuncionarioSupervisionado;

    public SupervisionaId() {}

    public SupervisionaId(Integer idFuncionarioSupervisor, Integer idFuncionarioSupervisionado) {
        this.idFuncionarioSupervisor = idFuncionarioSupervisor;
        this.idFuncionarioSupervisionado = idFuncionarioSupervisionado;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SupervisionaId)) return false;
        SupervisionaId that = (SupervisionaId) o;
        return Objects.equals(idFuncionarioSupervisor, that.idFuncionarioSupervisor) &&
               Objects.equals(idFuncionarioSupervisionado, that.idFuncionarioSupervisionado);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idFuncionarioSupervisor, idFuncionarioSupervisionado);
    }
}
