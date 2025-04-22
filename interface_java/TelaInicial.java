import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TelaInicial extends JFrame {

    public TelaInicial() {
        // Configurações básicas da tela
        setTitle("Tela Inicial");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Criação dos botões
        JButton btnPessoa = new JButton("Adicionar Pessoa");
        JButton btnReserva = new JButton("Fazer Reserva");
        JButton btnQuartos = new JButton("Gerenciar Quartos"); // Novo botão
        JButton btnAvaliacao = new JButton("Fazer Avaliação"); // Botão para a TelaAvaliacao

        // Layout
        setLayout(new FlowLayout());
        add(btnPessoa);
        add(btnReserva);
        add(btnQuartos); // Adiciona o botão "Gerenciar Quartos"
        add(btnAvaliacao); // Adiciona o botão "Tela Avaliação"

        // Ação do botão "Adicionar Pessoa"
        btnPessoa.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Abre a tela de cadastro de pessoa
                new PessoaCRUDGUI().setVisible(true);
                dispose(); // Fecha a tela inicial
            }
        });

        // Ação do botão "Fazer Reserva"
        btnReserva.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Abre a tela de reserva
                new TelaReserva().setVisible(true);
                dispose(); // Fecha a tela inicial
            }
        });

        // Ação do botão "Gerenciar Quartos"
        btnQuartos.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Abre a tela de gerenciamento de quartos
                new TelaQuarto().setVisible(true); // Supondo que TelaQuarto seja a sua classe de gerenciamento de quartos
                dispose(); // Fecha a tela inicial
            }
        });

        // Ação do botão "Tela Avaliação"
        btnAvaliacao.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Abre a tela de avaliação
                new TelaAvaliacao().setVisible(true); // Supondo que TelaAvaliacao seja a sua classe de avaliação
                dispose(); // Fecha a tela inicial
            }
        });
    }

    public static void main(String[] args) {
        // Inicia a tela inicial
        SwingUtilities.invokeLater(() -> new TelaInicial().setVisible(true));
    }
}
