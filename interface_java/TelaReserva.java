import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.SQLException;

public class TelaReserva extends JFrame {
    private JTextField idHospedeField, dataEntradaField, dataSaidaField, qtdHospedesField;
    private JTextArea quartosArea, servicosArea;
    private JButton reservarButton;
    private ReservaDAO reservaDAO;

    public TelaReserva() {
        reservaDAO = new ReservaDAO();

        setTitle("Fazer Reserva");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(7, 2, 10, 10));

        panel.add(new JLabel("ID Hóspede:"));
        idHospedeField = new JTextField();
        panel.add(idHospedeField);

        panel.add(new JLabel("Data Entrada (yyyy-mm-dd):"));
        dataEntradaField = new JTextField();
        panel.add(dataEntradaField);

        panel.add(new JLabel("Data Saída (yyyy-mm-dd):"));
        dataSaidaField = new JTextField();
        panel.add(dataSaidaField);

        panel.add(new JLabel("Quantidade de Hóspedes:"));
        qtdHospedesField = new JTextField();
        panel.add(qtdHospedesField);

        panel.add(new JLabel("Quartos (separados por vírgula):"));
        quartosArea = new JTextArea(3, 20);
        quartosArea.setLineWrap(true);
        quartosArea.setWrapStyleWord(true);
        JScrollPane scrollQuartos = new JScrollPane(quartosArea);
        panel.add(scrollQuartos);

        panel.add(new JLabel("Serviços (separados por vírgula):"));
        servicosArea = new JTextArea(3, 20);
        servicosArea.setLineWrap(true);
        servicosArea.setWrapStyleWord(true);
        JScrollPane scrollServicos = new JScrollPane(servicosArea);
        panel.add(scrollServicos);

        // Painel para botões
        JPanel buttonPanel = new JPanel();
        JButton deletarButton = new JButton("Deletar Reserva");
        JButton alterarButton = new JButton("Alterar Reserva");
        JButton visualizarButton = new JButton("Visualizar Reserva");
        reservarButton = new JButton("Fazer Reserva");

        buttonPanel.add(reservarButton);
        buttonPanel.add(deletarButton);
        buttonPanel.add(alterarButton);
        buttonPanel.add(visualizarButton);

        add(panel, BorderLayout.CENTER);
        add(buttonPanel, BorderLayout.SOUTH);

        // Ação do botão "Fazer Reserva"
        reservarButton.addActionListener(e -> {
            try {
                int idHospede = Integer.parseInt(idHospedeField.getText());
                String dataEntrada = dataEntradaField.getText();
                String dataSaida = dataSaidaField.getText();
                int qtdHospedes = Integer.parseInt(qtdHospedesField.getText());
                String quartos = quartosArea.getText();
                String servicos = servicosArea.getText();

                if (!reservaDAO.verificarHospedeExistente(idHospede)) {
                    JOptionPane.showMessageDialog(TelaReserva.this, "Hóspede não encontrado!");
                    return;
                }

                if (reservaDAO.verificarReservaExistente(idHospede)) {
                    JOptionPane.showMessageDialog(TelaReserva.this, "Este hóspede já possui uma reserva.");
                    return;
                }

                reservaDAO.inserirReserva(idHospede, dataEntrada, dataSaida, qtdHospedes, quartos, servicos);
                JOptionPane.showMessageDialog(TelaReserva.this, "Reserva realizada com sucesso!");
                dispose();
            } catch (SQLException ex) {
                JOptionPane.showMessageDialog(TelaReserva.this, "Erro ao realizar reserva: " + ex.getMessage());
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(TelaReserva.this, "Erro: " + ex.getMessage());
            }
        });

        // Ação do botão "Deletar Reserva"
        deletarButton.addActionListener(e -> {
            try {
                int idHospede = Integer.parseInt(idHospedeField.getText());

                if (!reservaDAO.verificarReservaExistente(idHospede)) {
                    JOptionPane.showMessageDialog(TelaReserva.this, "Nenhuma reserva encontrada para este hóspede.");
                    return;
                }

                reservaDAO.deletarReserva(idHospede);
                JOptionPane.showMessageDialog(TelaReserva.this, "Reserva deletada com sucesso!");
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(TelaReserva.this, "Erro ao deletar reserva: " + ex.getMessage());
            }
        });

        // Ação do botão "Alterar Reserva"
        alterarButton.addActionListener(e -> {
            try {
                int idHospede = Integer.parseInt(idHospedeField.getText());
                String dataEntrada = dataEntradaField.getText();
                String dataSaida = dataSaidaField.getText();
                int qtdHospedes = Integer.parseInt(qtdHospedesField.getText());
                String quartos = quartosArea.getText();
                String servicos = servicosArea.getText();

                if (!reservaDAO.verificarReservaExistente(idHospede)) {
                    JOptionPane.showMessageDialog(TelaReserva.this, "Nenhuma reserva encontrada para este hóspede.");
                    return;
                }

                reservaDAO.atualizarReserva(idHospede, dataEntrada, dataSaida, qtdHospedes, quartos, servicos);
                JOptionPane.showMessageDialog(TelaReserva.this, "Reserva atualizada com sucesso!");
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(TelaReserva.this, "Erro ao atualizar reserva: " + ex.getMessage());
            }
        });

        // Ação do botão "Visualizar Reserva"
        visualizarButton.addActionListener(e -> {
            try {
                int idHospede = Integer.parseInt(idHospedeField.getText());

                String dados = reservaDAO.visualizarReserva(idHospede);
                if (dados == null) {
                    JOptionPane.showMessageDialog(TelaReserva.this, "Nenhuma reserva encontrada.");
                } else {
                    JOptionPane.showMessageDialog(TelaReserva.this, dados);
                }
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(TelaReserva.this, "Erro ao visualizar reserva: " + ex.getMessage());
            }
        });
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new TelaReserva().setVisible(true);
        });
    }
}

