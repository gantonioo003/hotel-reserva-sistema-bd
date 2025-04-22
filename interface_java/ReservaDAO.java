import java.sql.*;

public class ReservaDAO {
    // Método para inserir uma reserva
    public void inserirReserva(int idHospede, String dataEntrada, String dataSaida, int qtdHospedes, String quartos, String servicos) throws SQLException {
        String sql = "INSERT INTO Reserva (id_hospede, data_entrada, data_saida, qtd_hospedes, quartos, servicos) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection conn = ConexaoBD.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, idHospede);
            stmt.setString(2, dataEntrada);
            stmt.setString(3, dataSaida);
            stmt.setInt(4, qtdHospedes);
            stmt.setString(5, quartos); // Insere os quartos
            stmt.setString(6, servicos); // Insere os serviços
            stmt.executeUpdate();
        }
    }

    // Método para verificar se o hóspede existe
    public boolean verificarHospedeExistente(int idHospede) throws SQLException {
        String sql = "SELECT COUNT(*) FROM Hospede WHERE id_pessoa = ?";
        try (Connection conn = ConexaoBD.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, idHospede);
            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next() && rs.getInt(1) > 0;
            }
        }
    }

    // Método para verificar se já existe uma reserva para o hóspede
    public boolean verificarReservaExistente(int idHospede) throws SQLException {
        String sql = "SELECT COUNT(*) FROM Reserva WHERE id_hospede = ?";
        try (Connection conn = ConexaoBD.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, idHospede);
            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next() && rs.getInt(1) > 0;
            }
        }
    }
 // Deletar reserva
    public void deletarReserva(int idHospede) throws SQLException {
        String sql = "DELETE FROM Reserva WHERE id_hospede = ?";
        try (Connection conn = ConexaoBD.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, idHospede);
            stmt.executeUpdate();
        }
    }

    // Atualizar reserva
    public void atualizarReserva(int idHospede, String dataEntrada, String dataSaida, int qtdHospedes, String quartos, String servicos) throws SQLException {
        String sql = "UPDATE Reserva SET data_entrada = ?, data_saida = ?, qtd_hospedes = ?, quartos = ?, servicos = ? WHERE id_hospede = ?";
        try (Connection conn = ConexaoBD.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, dataEntrada);
            stmt.setString(2, dataSaida);
            stmt.setInt(3, qtdHospedes);
            stmt.setString(4, quartos);
            stmt.setString(5, servicos);
            stmt.setInt(6, idHospede);
            stmt.executeUpdate();
        }
    }

    // Visualizar reserva
    public String visualizarReserva(int idHospede) throws SQLException {
        String sql = "SELECT * FROM Reserva WHERE id_hospede = ?";
        try (Connection conn = ConexaoBD.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, idHospede);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    return "Reserva:\n"
                            + "Entrada: " + rs.getString("data_entrada") + "\n"
                            + "Saída: " + rs.getString("data_saida") + "\n"
                            + "Qtd Hóspedes: " + rs.getInt("qtd_hospedes") + "\n"
                            + "Quartos: " + rs.getString("quartos") + "\n"
                            + "Serviços: " + rs.getString("servicos");
                } else {
                    return null;
                }
            }
        }
    }

}
