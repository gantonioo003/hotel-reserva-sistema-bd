import java.sql.*;

public class HospedeDAO {

    // Método para inserir um hóspede utilizando o ID da pessoa
    public void inserirHospede(int idPessoa) throws SQLException {
        String sql = "INSERT INTO Hospede (id_pessoa) VALUES (?)";
        
        try (Connection conn = ConexaoBD.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            // Verifica se o idPessoa é válido
            if (idPessoa <= 0) {
                throw new SQLException("ID de pessoa inválido.");
            }

            // Define o parâmetro do PreparedStatement
            stmt.setInt(1, idPessoa);

            // Executa a inserção
            int linhasAfetadas = stmt.executeUpdate();
            if (linhasAfetadas == 0) {
                throw new SQLException("Erro ao inserir hóspede. Nenhuma linha foi afetada.");
            }

            System.out.println("Hóspede inserido com sucesso. ID Pessoa: " + idPessoa);
        } catch (SQLException e) {
            System.err.println("Erro ao inserir hóspede: " + e.getMessage());
            throw e;  // Re-lança a exceção para ser tratada no nível superior
        }
    }
}
