public class Avaliacao {
    private int id;
    private int idReserva;
    private int nota;
    private String comentario;

    public Avaliacao() {
    }

    public Avaliacao(int idReserva, int nota, String comentario) {
        this.idReserva = idReserva;
        this.nota = nota;
        this.comentario = comentario;
    }

    public Avaliacao(int id, int idReserva, int nota, String comentario) {
        this.id = id;
        this.idReserva = idReserva;
        this.nota = nota;
        this.comentario = comentario;
    }

    // Getters e Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdReserva() {
        return idReserva;
    }

    public void setIdReserva(int idReserva) {
        this.idReserva = idReserva;
    }

    public int getNota() {
        return nota;
    }

    public void setNota(int nota) {
        this.nota = nota;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    @Override
    public String toString() {
        return "Avaliação ID: " + id +
               ", ID Reserva: " + idReserva +
               ", Nota: " + nota +
               ", Comentário: '" + comentario + "'";
    }
}
