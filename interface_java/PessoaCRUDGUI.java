import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.List;

public class PessoaCRUDGUI extends JFrame {
    private JTextField nomeField, cpfField, ruaField, numeroField, cidadeField, estadoField, cepField, telefone1Field, telefone2Field, dataNascimentoField;
    private JButton btnInserir, btnAlterar, btnDeletar, btnVisualizar;
    private JTable tabela;
    private PessoaDAO dao;
    private FuncionarioDAO funcionarioDAO;
    private HospedeDAO hospedeDAO;

    public PessoaCRUDGUI() {
        dao = new PessoaDAO();
        funcionarioDAO = new FuncionarioDAO();
        hospedeDAO = new HospedeDAO();

        setTitle("CRUD - Pessoa");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(11, 2));

        panel.add(new JLabel("Nome:"));
        nomeField = new JTextField();
        panel.add(nomeField);

        panel.add(new JLabel("CPF:"));
        cpfField = new JTextField();
        panel.add(cpfField);

        panel.add(new JLabel("Data de Nascimento (yyyy-mm-dd):"));
        dataNascimentoField = new JTextField();
        panel.add(dataNascimentoField);

        panel.add(new JLabel("Rua:"));
        ruaField = new JTextField();
        panel.add(ruaField);

        panel.add(new JLabel("Número:"));
        numeroField = new JTextField();
        panel.add(numeroField);

        panel.add(new JLabel("Cidade:"));
        cidadeField = new JTextField();
        panel.add(cidadeField);

        panel.add(new JLabel("Estado:"));
        estadoField = new JTextField();
        panel.add(estadoField);

        panel.add(new JLabel("CEP:"));
        cepField = new JTextField();
        panel.add(cepField);

        panel.add(new JLabel("Telefone 1:"));
        telefone1Field = new JTextField();
        panel.add(telefone1Field);

        panel.add(new JLabel("Telefone 2:"));
        telefone2Field = new JTextField();
        panel.add(telefone2Field);

        btnInserir = new JButton("Inserir");
        btnAlterar = new JButton("Alterar");
        btnDeletar = new JButton("Deletar");
        btnVisualizar = new JButton("Visualizar");

        JPanel btnPanel = new JPanel();
        btnPanel.add(btnInserir);
        btnPanel.add(btnAlterar);
        btnPanel.add(btnDeletar);
        btnPanel.add(btnVisualizar);

        add(panel, BorderLayout.NORTH);
        add(btnPanel, BorderLayout.CENTER);

        tabela = new JTable();
        add(new JScrollPane(tabela), BorderLayout.SOUTH);

        btnInserir.addActionListener(e -> inserirPessoa());
        btnAlterar.addActionListener(e -> alterarPessoa());
        btnDeletar.addActionListener(e -> deletarPessoa());
        btnVisualizar.addActionListener(e -> visualizarPessoas());
    }

    private void inserirPessoa() {
        try {
            String dataNascimentoStr = dataNascimentoField.getText();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            java.util.Date utilDate = sdf.parse(dataNascimentoStr);
            java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());

            Pessoa p = new Pessoa(
                nomeField.getText(),
                cpfField.getText(),
                sqlDate,
                ruaField.getText(),
                numeroField.getText(),
                cidadeField.getText(),
                estadoField.getText(),
                cepField.getText(),
                telefone1Field.getText(),
                telefone2Field.getText()
            );

            // Captura o ID retornado
            int idGerado = dao.inserir(p);
            JOptionPane.showMessageDialog(this, "Pessoa inserida com sucesso! ID = " + idGerado);

            // Após inserir, pergunta ao usuário se ele é hóspede ou funcionário
            String[] opcoes = {"Hóspede", "Funcionário", "Ambos", "Nenhum"};
            int escolha = JOptionPane.showOptionDialog(this,
                    "Essa pessoa é um hóspede ou funcionário?",
                    "Tipo de Pessoa",
                    JOptionPane.DEFAULT_OPTION,
                    JOptionPane.QUESTION_MESSAGE,
                    null,
                    opcoes,
                    opcoes[0]);

            if (escolha == 0 || escolha == 2) {
                hospedeDAO.inserirHospede(idGerado);
                JOptionPane.showMessageDialog(this, "Pessoa registrada como hóspede.");
            }

            if (escolha == 1 || escolha == 2) {
                String inputSupervisor = JOptionPane.showInputDialog(this, "Digite o ID do supervisor (ou deixe vazio):");
                Integer supervisorId = null;

                // Verifica se o supervisor foi informado
                if (inputSupervisor != null && !inputSupervisor.isBlank()) {
                    try {
                        // Tenta converter o valor para Integer
                        supervisorId = Integer.parseInt(inputSupervisor);
                    } catch (NumberFormatException e) {
                        // Se não for um número válido, mostra um erro
                        JOptionPane.showMessageDialog(this, "ID do supervisor inválido. Apenas números inteiros são permitidos.");
                        return;  // Encerra o processo se houver erro
                    }
                }

                try {
                    // Chama o método para inserir o funcionário no banco de dados
                    funcionarioDAO.inserirFuncionario(idGerado, supervisorId);
                    JOptionPane.showMessageDialog(this, "Pessoa registrada como funcionário.");
                } catch (SQLException e) {
                    JOptionPane.showMessageDialog(this, "Erro ao registrar funcionário: " + e.getMessage());
                }
            }



        } catch (Exception e) {
            JOptionPane.showMessageDialog(this, "Erro ao inserir pessoa: " + e.getMessage());
            e.printStackTrace();
        }
    }


    private void alterarPessoa() {
        try {
            int id = Integer.parseInt(JOptionPane.showInputDialog("Digite o ID da pessoa a ser alterada:"));
            
            String dataNascimentoStr = dataNascimentoField.getText();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            java.util.Date utilDate = sdf.parse(dataNascimentoStr);
            java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());

            Pessoa p = new Pessoa(id, nomeField.getText(), cpfField.getText(), sqlDate, ruaField.getText(), numeroField.getText(), cidadeField.getText(), estadoField.getText(), cepField.getText(), telefone1Field.getText(), telefone2Field.getText());
            dao.atualizar(p);
            JOptionPane.showMessageDialog(this, "Pessoa alterada com sucesso!");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(this, "Erro ao alterar pessoa: " + e.getMessage());
        }
    }

    private void deletarPessoa() {
        try {
            int id = Integer.parseInt(JOptionPane.showInputDialog("Digite o ID da pessoa a ser deletada:"));
            dao.deletar(id);
            JOptionPane.showMessageDialog(this, "Pessoa deletada com sucesso!");
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Erro ao deletar pessoa: " + e.getMessage());
        }
    }

    private void visualizarPessoas() {
        try {
            List<Pessoa> pessoas = dao.listar();
            Object[][] dados = new Object[pessoas.size()][10];
            String[] colunas = {"ID", "Nome", "CPF", "Data Nascimento", "Rua", "Número", "Cidade", "Estado", "CEP", "Telefone1", "Telefone2"};

            for (int i = 0; i < pessoas.size(); i++) {
                Pessoa p = pessoas.get(i);
                dados[i] = new Object[]{
                    p.getId(), p.getNome(), p.getCpf(), p.getDataNascimento(),
                    p.getRua(), p.getNumero(), p.getCidade(), p.getEstado(),
                    p.getCep(), p.getTelefone1(), p.getTelefone2()
                };
            }

            tabela.setModel(new javax.swing.table.DefaultTableModel(dados, colunas));
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Erro ao visualizar pessoas: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new PessoaCRUDGUI().setVisible(true);
            }
        });
    }
}