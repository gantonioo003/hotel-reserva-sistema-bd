import javax.swing.*;
import java.awt.*;
import java.text.SimpleDateFormat;
import java.sql.SQLException;

public class TelaAvaliacao extends JFrame {
    private JTextField idReservaField, notaField, comentarioField, idAvaliacaoField;
    private JButton inserirButton, alterarButton, deletarButton, visualizarButton;
    private JTable tabela;
    private AvaliacaoDAO avaliacaoDAO;

    public TelaAvaliacao() {
        avaliacaoDAO = new AvaliacaoDAO();

        setTitle("CRUD - Avaliação de Reserva");
        setSize(700, 500);
        setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        JPanel formPanel = new JPanel(new GridLayout(4, 2, 5, 5));

        formPanel.add(new JLabel("ID Reserva:"));
        idReservaField = new JTextField();
        formPanel.add(idReservaField);

        formPanel.add(new JLabel("Nota (1-5):"));
        notaField = new JTextField();
        formPanel.add(notaField);

        formPanel.add(new JLabel("Comentário:"));
        comentarioField = new JTextField();
        formPanel.add(comentarioField);

        formPanel.add(new JLabel("ID Avaliação (p/ editar/deletar):"));
        idAvaliacaoField = new JTextField();
        formPanel.add(idAvaliacaoField);

        add(formPanel, BorderLayout.NORTH);

        JPanel btnPanel = new JPanel();
        inserirButton = new JButton("Inserir");
        alterarButton = new JButton("Alterar");
        deletarButton = new JButton("Deletar");
        visualizarButton = new JButton("Visualizar");

        btnPanel.add(inserirButton);
        btnPanel.add(alterarButton);
        btnPanel.add(deletarButton);
        btnPanel.add(visualizarButton);

        add(btnPanel, BorderLayout.CENTER);

        tabela = new JTable();
        add(new JScrollPane(tabela), BorderLayout.SOUTH);

        // Ações
        inserirButton.addActionListener(e -> {
            try {
                int idReserva = Integer.parseInt(idReservaField.getText());
                int nota = Integer.parseInt(notaField.getText());
                String comentario = comentarioField.getText();

                if (!avaliacaoDAO.reservaExiste(idReserva)) {
                    JOptionPane.showMessageDialog(this, "Reserva não encontrada.");
                    return;
                }

                avaliacaoDAO.inserirAvaliacao(idReserva, nota, comentario);
                JOptionPane.showMessageDialog(this, "Avaliação inserida!");
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(this, "Erro ao inserir: " + ex.getMessage());
            }
        });

        alterarButton.addActionListener(e -> {
            try {
                int id = Integer.parseInt(idAvaliacaoField.getText());
                int nota = Integer.parseInt(notaField.getText());
                String comentario = comentarioField.getText();

                avaliacaoDAO.atualizarAvaliacao(id, nota, comentario);
                JOptionPane.showMessageDialog(this, "Avaliação atualizada!");
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(this, "Erro ao alterar: " + ex.getMessage());
            }
        });

        deletarButton.addActionListener(e -> {
            try {
                int id = Integer.parseInt(idAvaliacaoField.getText());
                avaliacaoDAO.deletarAvaliacao(id);
                JOptionPane.showMessageDialog(this, "Avaliação deletada!");
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(this, "Erro ao deletar: " + ex.getMessage());
            }
        });

        visualizarButton.addActionListener(e -> {
            try {
                int id = Integer.parseInt(idAvaliacaoField.getText());
                String info = avaliacaoDAO.visualizarAvaliacao(id);

                if (info == null) {
                    JOptionPane.showMessageDialog(this, "Avaliação não encontrada.");
                } else {
                    JOptionPane.showMessageDialog(this, info);
                }

                // Dica extra: você pode carregar todas avaliações e mostrar na tabela também
                // tabela.setModel(avaliacaoDAO.getAllAvaliacoesComoTableModel());

            } catch (Exception ex) {
                JOptionPane.showMessageDialog(this, "Erro ao visualizar: " + ex.getMessage());
            }
        });
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new TelaAvaliacao().setVisible(true));
    }
}
