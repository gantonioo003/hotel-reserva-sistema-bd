public class Pagamento {
    private int id;
    private int idReserva;
    private double valor;
    private String metodo;
    private String dataPagamento;

    // Construtores, getters e setters
    public Pagamento(int idReserva, double valor, String metodo, String dataPagamento) {
        this.idReserva = idReserva;
        this.valor = valor;
        this.metodo = metodo;
        this.dataPagamento = dataPagamento;
    }

    public int getId() { return id; }
    public int getIdReserva() { return idReserva; }
    public double getValor() { return valor; }
    public String getMetodo() { return metodo; }
    public String getDataPagamento() { return dataPagamento; }

    public void setId(int id) { this.id = id; }
    public void setIdReserva(int idReserva) { this.idReserva = idReserva; }
    public void setValor(double valor) { this.valor = valor; }
    public void setMetodo(String metodo) { this.metodo = metodo; }
    public void setDataPagamento(String dataPagamento) { this.dataPagamento = dataPagamento; }
}
