import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.*;
import java.sql.SQLException;

public class TelaPagamento extends JFrame {
    private JTextField txtId, txtIdReserva, txtValor, txtMetodo, txtData;
    private JButton btnInserir, btnAtualizar, btnDeletar, btnVisualizar;
    private JTable tabela;
    private PagamentoDAO dao;

    public TelaPagamento() {
        dao = new PagamentoDAO();

        setTitle("CRUD - Pagamento");
        setSize(800, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        // Painel de campos
        JPanel panelCampos = new JPanel(new GridLayout(5, 2, 5, 5));

        panelCampos.add(new JLabel("ID do Pagamento:"));
        txtId = new JTextField();
        panelCampos.add(txtId);

        panelCampos.add(new JLabel("ID da Reserva:"));
        txtIdReserva = new JTextField();
        panelCampos.add(txtIdReserva);

        panelCampos.add(new JLabel("Valor:"));
        txtValor = new JTextField();
        panelCampos.add(txtValor);

        panelCampos.add(new JLabel("Método:"));
        txtMetodo = new JTextField();
        panelCampos.add(txtMetodo);

        panelCampos.add(new JLabel("Data (YYYY-MM-DD):"));
        txtData = new JTextField();
        panelCampos.add(txtData);

        add(panelCampos, BorderLayout.NORTH);

        // Painel de botões
        JPanel panelBotoes = new JPanel();

        btnInserir = new JButton("Inserir");
        btnAtualizar = new JButton("Atualizar");
        btnDeletar = new JButton("Deletar");
        btnVisualizar = new JButton("Visualizar");

        panelBotoes.add(btnInserir);
        panelBotoes.add(btnAtualizar);
        panelBotoes.add(btnDeletar);
        panelBotoes.add(btnVisualizar);

        add(panelBotoes, BorderLayout.CENTER);

        // Tabela
        tabela = new JTable(new DefaultTableModel(
            new Object[]{"ID", "ID Reserva", "Valor", "Método", "Data"}, 0
        ));
        add(new JScrollPane(tabela), BorderLayout.SOUTH);

        // Ações dos botões
        btnInserir.addActionListener(e -> inserirPagamento());
        btnAtualizar.addActionListener(e -> atualizarPagamento());
        btnDeletar.addActionListener(e -> deletarPagamento());
        btnVisualizar.addActionListener(e -> visualizarPagamento());

        setVisible(true);
    }

    private void inserirPagamento() {
        try {
            int idReserva = Integer.parseInt(txtIdReserva.getText());
            double valor = Double.parseDouble(txtValor.getText());
            String metodo = txtMetodo.getText();
            String data = txtData.getText();

            dao.inserirPagamento(idReserva, valor, metodo, data);
            JOptionPane.showMessageDialog(this, "Pagamento inserido com sucesso!");
        } catch (SQLException | NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Erro ao inserir: " + ex.getMessage());
        }
    }

    private void atualizarPagamento() {
        try {
            int id = Integer.parseInt(txtId.getText());
            double valor = Double.parseDouble(txtValor.getText());
            String metodo = txtMetodo.getText();
            String data = txtData.getText();

            dao.atualizarPagamento(id, valor, metodo, data);
            JOptionPane.showMessageDialog(this, "Pagamento atualizado com sucesso!");
        } catch (SQLException | NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Erro ao atualizar: " + ex.getMessage());
        }
    }

    private void deletarPagamento() {
        try {
            int id = Integer.parseInt(txtId.getText());
            dao.deletarPagamento(id);
            JOptionPane.showMessageDialog(this, "Pagamento deletado com sucesso!");
        } catch (SQLException | NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Erro ao deletar: " + ex.getMessage());
        }
    }

    private void visualizarPagamento() {
        try {
            int id = Integer.parseInt(txtId.getText());
            String dados = dao.visualizarPagamento(id);

            if (dados != null) {
                String[] campos = dados.split(";");
                DefaultTableModel model = (DefaultTableModel) tabela.getModel();
                model.setRowCount(0); // limpa a tabela
                model.addRow(new Object[]{campos[0], campos[1], campos[2], campos[3], campos[4]});
            } else {
                JOptionPane.showMessageDialog(this, "Pagamento não encontrado.");
            }

        } catch (SQLException | NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Erro ao visualizar: " + ex.getMessage());
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(TelaPagamento::new);
    }
}
