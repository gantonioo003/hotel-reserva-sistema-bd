public class Funcionario {
    private int idPessoa;
    private Integer supervisorId;

    public Funcionario(int idPessoa, Integer supervisorId) {
        this.idPessoa = idPessoa;
        this.supervisorId = supervisorId;
    }

    public int getIdPessoa() {
        return idPessoa;
    }

    public void setIdPessoa(int idPessoa) {
        this.idPessoa = idPessoa;
    }

    public Integer getSupervisorId() {
        return supervisorId;
    }

    public void setSupervisorId(Integer supervisorId) {
        this.supervisorId = supervisorId;
    }
}
