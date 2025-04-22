public class Reserva {
    private int id;
    private int idHospede;
    private java.sql.Date dataEntrada;
    private java.sql.Date dataSaida;
    private int qtdHospedes;
    private String quartos;
    private String servicos;

    // Construtor sem ID (usado ao inserir no banco)
    public Reserva(int idHospede, java.sql.Date dataEntrada, java.sql.Date dataSaida,
                   int qtdHospedes, String quartos, String servicos) {
        this.idHospede = idHospede;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
        this.qtdHospedes = qtdHospedes;
        this.quartos = quartos;
        this.servicos = servicos;
    }

    // Construtor completo (caso você queira carregar uma reserva já existente)
    public Reserva(int id, int idHospede, java.sql.Date dataEntrada, java.sql.Date dataSaida,
                   int qtdHospedes, String quartos, String servicos) {
        this.id = id;
        this.idHospede = idHospede;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
        this.qtdHospedes = qtdHospedes;
        this.quartos = quartos;
        this.servicos = servicos;
    }

    // Getters e setters

    public int getId() {
        return id;
    }

    public int getIdHospede() {
        return idHospede;
    }

    public void setIdHospede(int idHospede) {
        this.idHospede = idHospede;
    }

    public java.sql.Date getDataEntrada() {
        return dataEntrada;
    }

    public void setDataEntrada(java.sql.Date dataEntrada) {
        this.dataEntrada = dataEntrada;
    }

    public java.sql.Date getDataSaida() {
        return dataSaida;
    }

    public void setDataSaida(java.sql.Date dataSaida) {
        this.dataSaida = dataSaida;
    }

    public int getQtdHospedes() {
        return qtdHospedes;
    }

    public void setQtdHospedes(int qtdHospedes) {
        this.qtdHospedes = qtdHospedes;
    }

    public String getQuartos() {
        return quartos;
    }

    public void setQuartos(String quartos) {
        this.quartos = quartos;
    }

    public String getServicos() {
        return servicos;
    }

    public void setServicos(String servicos) {
        this.servicos = servicos;
    }
}
