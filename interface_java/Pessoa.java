import java.sql.Date;

public class Pessoa {
    private int id;
    private String nome;
    private String cpf;
    private Date dataNascimento;
    private String rua;
    private String numero;
    private String cidade;
    private String estado;
    private String cep;
    private String telefone1;
    private String telefone2;

    public Pessoa() {}

    public Pessoa(String nome, String cpf, Date dataNascimento, String rua, String numero, String cidade, String estado, String cep, String telefone1, String telefone2) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.telefone1 = telefone1;
        this.telefone2 = telefone2;
    }

    public Pessoa(int id, String nome, String cpf, Date dataNascimento, String rua, String numero, String cidade, String estado, String cep, String telefone1, String telefone2) {
        this(nome, cpf, dataNascimento, rua, numero, cidade, estado, cep, telefone1, telefone2);
        this.id = id;
    }

    // Getters e Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCpf() { return cpf; }
    public void setCpf(String cpf) { this.cpf = cpf; }

    public Date getDataNascimento() { return dataNascimento; }
    public void setDataNascimento(Date dataNascimento) { this.dataNascimento = dataNascimento; }

    public String getRua() { return rua; }
    public void setRua(String rua) { this.rua = rua; }

    public String getNumero() { return numero; }
    public void setNumero(String numero) { this.numero = numero; }

    public String getCidade() { return cidade; }
    public void setCidade(String cidade) { this.cidade = cidade; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }

    public String getCep() { return cep; }
    public void setCep(String cep) { this.cep = cep; }

    public String getTelefone1() { return telefone1; }
    public void setTelefone1(String telefone1) { this.telefone1 = telefone1; }

    public String getTelefone2() { return telefone2; }
    public void setTelefone2(String telefone2) { this.telefone2 = telefone2; }
}
