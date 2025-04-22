import java.sql.*;

public class QuartoDAO {
    private Connection connection;

    // Construtor que inicializa a conexão com o banco
    public QuartoDAO(Connection connection) {
        this.connection = connection;
    }

    // Método para salvar um novo quarto
    public void salvar(Quarto quarto) throws SQLException {
        String sql = "INSERT INTO Quarto (numero, tipo, capacidade, valor_diaria, status) VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, quarto.getNumero());
            stmt.setString(2, quarto.getTipo());
            stmt.setInt(3, quarto.getCapacidade());
            stmt.setDouble(4, quarto.getValorDiaria());
            stmt.setString(5, quarto.getStatus());
            stmt.executeUpdate();
        }
    }

    // Método para listar todos os quartos
    public void listar() throws SQLException {
        String sql = "SELECT * FROM Quarto";
        try (Statement stmt = connection.createStatement(); ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                String numero = rs.getString("numero");
                String tipo = rs.getString("tipo");
                int capacidade = rs.getInt("capacidade");
                double valorDiaria = rs.getDouble("valor_diaria");
                String status = rs.getString("status");
                
                Quarto quarto = new Quarto(numero, tipo, capacidade, valorDiaria, status);
                System.out.println(quarto);
            }
        }
    }

    // Método para buscar um quarto pelo número
    public Quarto buscarPorNumero(String numero) throws SQLException {
        String sql = "SELECT * FROM Quarto WHERE numero = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, numero);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    String tipo = rs.getString("tipo");
                    int capacidade = rs.getInt("capacidade");
                    double valorDiaria = rs.getDouble("valor_diaria");
                    String status = rs.getString("status");
                    return new Quarto(numero, tipo, capacidade, valorDiaria, status);
                }
            }
        }
        return null; // Caso o quarto não seja encontrado
    }

    // Método para atualizar um quarto
    public void atualizar(Quarto quarto) throws SQLException {
        String sql = "UPDATE Quarto SET tipo = ?, capacidade = ?, valor_diaria = ?, status = ? WHERE numero = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, quarto.getTipo());
            stmt.setInt(2, quarto.getCapacidade());
            stmt.setDouble(3, quarto.getValorDiaria());
            stmt.setString(4, quarto.getStatus());
            stmt.setString(5, quarto.getNumero());
            stmt.executeUpdate();
        }
    }

    // Método para excluir um quarto
    public void excluir(String numero) throws SQLException {
        String sql = "DELETE FROM Quarto WHERE numero = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, numero);
            stmt.executeUpdate();
        }
    }
}
