import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class TelaQuarto extends JFrame {
    private static QuartoDAO quartoDAO;

    public TelaQuarto() {
        // Configurações da tela
        setTitle("Gerenciar Quartos");
        setSize(400, 300);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Layout
        setLayout(new BorderLayout());

        JPanel panel = new JPanel();
        panel.setLayout(new FlowLayout());

        // Adicionando botões
        JButton btnAdicionar = new JButton("Adicionar Quarto");
        JButton btnListar = new JButton("Listar Quartos");
        JButton btnBuscar = new JButton("Buscar Quarto");
        JButton btnAtualizar = new JButton("Atualizar Quarto");
        JButton btnExcluir = new JButton("Excluir Quarto");

        // Ações dos botões
        btnAdicionar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Ação para adicionar quarto
            }
        });

        btnListar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Ação para listar quartos
            }
        });

        btnBuscar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Ação para buscar quarto
            }
        });

        btnAtualizar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Ação para atualizar quarto
            }
        });

        btnExcluir.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Ação para excluir quarto
            }
        });

        panel.add(btnAdicionar);
        panel.add(btnListar);
        panel.add(btnBuscar);
        panel.add(btnAtualizar);
        panel.add(btnExcluir);

        add(panel, BorderLayout.CENTER);
    }

    public static void main(String[] args) {
        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/sua_base", "usuario", "senha");
            quartoDAO = new QuartoDAO(connection);
            SwingUtilities.invokeLater(new Runnable() {
                @Override
                public void run() {
                    new TelaQuarto().setVisible(true); // Exibe a tela gráfica
                }
            });
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
