public class Quarto {
    private String numero;
    private String tipo; // pode ser 'simples', 'duplo' ou 'suíte'
    private int capacidade;
    private double valorDiaria; // Usando double para valores decimais
    private String status; // 'livre', 'reservado', 'ocupado'

    // Construtores, getters e setters
    public Quarto(String numero, String tipo, int capacidade, double valorDiaria, String status) {
        this.numero = numero;
        this.tipo = tipo;
        this.capacidade = capacidade;
        this.valorDiaria = valorDiaria;
        this.status = status;
    }

    // Getters e Setters
    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int getCapacidade() {
        return capacidade;
    }

    public void setCapacidade(int capacidade) {
        this.capacidade = capacidade;
    }

    public double getValorDiaria() {
        return valorDiaria;
    }

    public void setValorDiaria(double valorDiaria) {
        this.valorDiaria = valorDiaria;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Quarto{" +
               "numero='" + numero + '\'' +
               ", tipo='" + tipo + '\'' +
               ", capacidade=" + capacidade +
               ", valorDiaria=" + valorDiaria +
               ", status='" + status + '\'' +
               '}';
    }
}
