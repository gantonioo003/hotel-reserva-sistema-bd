import java.sql.*;

public class FuncionarioDAO {

    public void inserirFuncionario(int idPessoa, Integer supervisorId) throws SQLException {
        // Conectar ao banco de dados
        try (Connection conn = ConexaoBD.getConnection()) {
            // Verifica se o supervisorId informado existe na tabela Funcionario
            if (supervisorId != null) {
                if (!verificarSupervisorExistente(conn, supervisorId)) {
                    throw new SQLException("Supervisor com ID " + supervisorId + " não encontrado.");
                }
            }
            
            // Inserir o novo funcionário
            String sql = "INSERT INTO Funcionario (id_pessoa, supervisor_id) VALUES (?, ?)";
            try (PreparedStatement stmt = conn.prepareStatement(sql)) {
                stmt.setInt(1, idPessoa);
                
                // Se não tiver supervisor, coloca NULL no campo supervisor_id
                if (supervisorId != null) {
                    stmt.setInt(2, supervisorId);  // Se tiver supervisor, insere o id dele
                } else {
                    stmt.setNull(2, Types.INTEGER);  // Se não tiver supervisor, coloca NULL
                }
                
                stmt.executeUpdate();
                System.out.println("Funcionário inserido com sucesso.");
            }
        } catch (SQLException e) {
            System.err.println("Erro ao inserir funcionário: " + e.getMessage());
            throw e;
        }
    }

    private boolean verificarSupervisorExistente(Connection conn, int supervisorId) throws SQLException {
        String sql = "SELECT COUNT(*) FROM Funcionario WHERE id_pessoa = ?";
        
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, supervisorId);
            
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return rs.getInt(1) > 0;  // Se retornar maior que 0, significa que o supervisor existe
                }
                return false;  // Não existe nenhum supervisor com esse id
            }
        }
    }
}

