package com.hotel.reserva.model;

import java.io.Serializable;
import java.util.Objects;

public class PossuiId implements Serializable {
    private Integer idServico;
    private Integer idReserva;

    // Construtores
    public PossuiId() {}

    public PossuiId(Integer idServico, Integer idReserva) {
        this.idServico = idServico;
        this.idReserva = idReserva;
    }

    // hashCode e equals
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PossuiId)) return false;
        PossuiId that = (PossuiId) o;
        return Objects.equals(idServico, that.idServico) &&
               Objects.equals(idReserva, that.idReserva);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idServico, idReserva);
    }
}
