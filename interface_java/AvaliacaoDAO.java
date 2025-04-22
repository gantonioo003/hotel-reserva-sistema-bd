import java.sql.*;

public class AvaliacaoDAO {
    private Connection conn;

    // Construtor para inicializar a conexão com o banco de dados
    public AvaliacaoDAO() {
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hotel", "root", "root");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Verificar se a reserva existe
    public boolean reservaExiste(int idReserva) throws SQLException {
        String sql = "SELECT id FROM Reserva WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, idReserva);
            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next();  // Retorna true se existir algum resultado
            }
        }
    }

    // Inserir avaliação
    public void inserirAvaliacao(int idReserva, int nota, String comentario) throws SQLException {
        String sql = "INSERT INTO Avaliacao (id_reserva, nota, comentario) VALUES (?, ?, ?)";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, idReserva);
            stmt.setInt(2, nota);
            stmt.setString(3, comentario);
            stmt.executeUpdate();
        }
    }

    // Atualizar avaliação
    public void atualizarAvaliacao(int id, int nota, String comentario) throws SQLException {
        String sql = "UPDATE Avaliacao SET nota = ?, comentario = ? WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, nota);
            stmt.setString(2, comentario);
            stmt.setInt(3, id);
            stmt.executeUpdate();
        }
    }

    // Deletar avaliação
    public void deletarAvaliacao(int id) throws SQLException {
        String sql = "DELETE FROM Avaliacao WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.executeUpdate();
        }
    }

    // Visualizar avaliação por ID
    public String visualizarAvaliacao(int id) throws SQLException {
        String sql = "SELECT * FROM Avaliacao WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return "ID Avaliação: " + rs.getInt("id") +
                           "\nID Reserva: " + rs.getInt("id_reserva") +
                           "\nNota: " + rs.getInt("nota") +
                           "\nComentário: " + rs.getString("comentario");
                }
                return "Avaliação não encontrada!";
            }
        }
    }

    // Fechar a conexão (melhor fazer isso em uma classe de conexão centralizada)
    public void fecharConexao() throws SQLException {
        if (conn != null && !conn.isClosed()) {
            conn.close();
        }
    }
}
