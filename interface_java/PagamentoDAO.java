import java.sql.*;

public class PagamentoDAO {
    private Connection conn;

    public PagamentoDAO() {
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hotel", "root", "root");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Verifica se a reserva existe
    public boolean reservaExiste(int idReserva) throws SQLException {
        String sql = "SELECT id FROM Reserva WHERE id = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setInt(1, idReserva);
        ResultSet rs = stmt.executeQuery();
        return rs.next();
    }

    // Inserir pagamento
    public void inserirPagamento(int idReserva, double valor, String metodo, String dataPagamento) throws SQLException {
        if (!reservaExiste(idReserva)) {
            System.out.println("ID da reserva não existe.");
            return;
        }

        String sql = "INSERT INTO Pagamento (id_reserva, valor, metodo, data_pagamento) VALUES (?, ?, ?, ?)";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setInt(1, idReserva);
        stmt.setDouble(2, valor);
        stmt.setString(3, metodo);
        stmt.setString(4, dataPagamento);
        stmt.executeUpdate();
    }

    // Atualizar pagamento
    public void atualizarPagamento(int id, double valor, String metodo, String dataPagamento) throws SQLException {
        String sql = "UPDATE Pagamento SET valor = ?, metodo = ?, data_pagamento = ? WHERE id = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setDouble(1, valor);
        stmt.setString(2, metodo);
        stmt.setString(3, dataPagamento);
        stmt.setInt(4, id);
        stmt.executeUpdate();
    }

    // Deletar pagamento
    public void deletarPagamento(int id) throws SQLException {
        String sql = "DELETE FROM Pagamento WHERE id = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setInt(1, id);
        stmt.executeUpdate();
    }

    // Visualizar pagamento
    public String visualizarPagamento(int id) throws SQLException {
        String sql = "SELECT * FROM Pagamento WHERE id = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setInt(1, id);
        ResultSet rs = stmt.executeQuery();

        if (rs.next()) {
            return "ID Pagamento: " + rs.getInt("id") +
                   "\nID Reserva: " + rs.getInt("id_reserva") +
                   "\nValor: " + rs.getDouble("valor") +
                   "\nMétodo: " + rs.getString("metodo") +
                   "\nData Pagamento: " + rs.getString("data_pagamento");
        }
        return null;
    }
}
