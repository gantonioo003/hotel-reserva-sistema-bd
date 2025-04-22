import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class PessoaDAO {
	public int inserir(Pessoa p) throws SQLException {
	    String sql = "INSERT INTO pessoa (nome, cpf, data_nascimento, rua, numero, cidade, estado, cep, telefone1, telefone2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

	    try (Connection conn = ConexaoBD.getConnection();
	         PreparedStatement stmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

	        stmt.setString(1, p.getNome());
	        stmt.setString(2, p.getCpf());
	        stmt.setDate(3, p.getDataNascimento());
	        stmt.setString(4, p.getRua());
	        stmt.setString(5, p.getNumero());
	        stmt.setString(6, p.getCidade());
	        stmt.setString(7, p.getEstado());
	        stmt.setString(8, p.getCep());
	        stmt.setString(9, p.getTelefone1());
	        stmt.setString(10, p.getTelefone2());

	        int linhasAfetadas = stmt.executeUpdate();

	        if (linhasAfetadas > 0) {
	            ResultSet rs = stmt.getGeneratedKeys();
	            if (rs.next()) {
	                return rs.getInt(1); // retorna o ID gerado
	            }
	        }
	        throw new SQLException("Erro ao inserir pessoa: nenhum ID retornado.");
	    }
	}


    public List<Pessoa> listar() throws SQLException {
        List<Pessoa> lista = new ArrayList<>();
        String sql = "SELECT * FROM Pessoa";
        try (Connection conn = ConexaoBD.getConnection(); Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                Pessoa p = new Pessoa(
                    rs.getInt("id"),
                    rs.getString("nome"),
                    rs.getString("cpf"),
                    rs.getDate("data_nascimento"),
                    rs.getString("rua"),
                    rs.getString("numero"),
                    rs.getString("cidade"),
                    rs.getString("estado"),
                    rs.getString("cep"),
                    rs.getString("telefone1"),
                    rs.getString("telefone2")
                );
                lista.add(p);
            }
        }
        return lista;
    }

    public void atualizar(Pessoa p) throws SQLException {
        String sql = "UPDATE Pessoa SET nome=?, cpf=?, data_nascimento=?, rua=?, numero=?, cidade=?, estado=?, cep=?, telefone1=?, telefone2=? WHERE id=?";
        try (Connection conn = ConexaoBD.getConnection(); PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, p.getNome());
            stmt.setString(2, p.getCpf());
            stmt.setDate(3, p.getDataNascimento());
            stmt.setString(4, p.getRua());
            stmt.setString(5, p.getNumero());
            stmt.setString(6, p.getCidade());
            stmt.setString(7, p.getEstado());
            stmt.setString(8, p.getCep());
            stmt.setString(9, p.getTelefone1());
            stmt.setString(10, p.getTelefone2());
            stmt.setInt(11, p.getId());
            stmt.executeUpdate();
        }
    }

    public void deletar(int id) throws SQLException {
        String sql = "DELETE FROM Pessoa WHERE id=?";
        try (Connection conn = ConexaoBD.getConnection(); PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.executeUpdate();
        }
    }
    
    public int inserirComRetorno(Pessoa p) throws SQLException {
        String sql = "INSERT INTO Pessoa (nome, cpf, data_nascimento, rua, numero, cidade, estado, cep, telefone1, telefone2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try (Connection conn = ConexaoBD.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

            stmt.setString(1, p.getNome());
            stmt.setString(2, p.getCpf());
            stmt.setDate(3, p.getDataNascimento());
            stmt.setString(4, p.getRua());
            stmt.setString(5, p.getNumero());
            stmt.setString(6, p.getCidade());
            stmt.setString(7, p.getEstado());
            stmt.setString(8, p.getCep());
            stmt.setString(9, p.getTelefone1());
            stmt.setString(10, p.getTelefone2());

            stmt.executeUpdate();

            try (ResultSet generatedKeys = stmt.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    return generatedKeys.getInt(1);
                } else {
                    throw new SQLException("Falha ao obter o ID da pessoa inserida.");
                }
            }
        }
    }

}
