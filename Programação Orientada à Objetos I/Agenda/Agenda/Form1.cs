using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Agenda
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        bool isInclusao = false;

        List<Contato> Contatos = new List<Contato>();

        private void btnAlterar_Click(object sender, EventArgs e)
        {
            isInclusao = false;

            label1.Text = dgvContatos.CurrentRow.Cells[0].Value.ToString();
            txtNome.Text = dgvContatos.CurrentRow.Cells[1].Value.ToString();
            txtTelefone.Text = dgvContatos.CurrentRow.Cells[2].Value.ToString();
            txtIdade.Text = dgvContatos.CurrentRow.Cells[3].Value.ToString();
        }

        private void btnSalvar_Click(object sender, EventArgs e)
        {
            if (isInclusao)
            {
                //Instancia o objeto utilizando construtor padrão
                Contato c = new Contato();

                c.Id = Contatos.Count + 1;
                c.Nome = txtNome.Text;
                c.Telefone = txtTelefone.Text;
                c.Idade = int.Parse(txtIdade.Text);

                //Instancia o objeto utilizando construtor NÃO padrão
                //Contato c = new Contato(Contatos.Count + 1, txtNome.Text, txtTelefone.Text, int.Parse(txtIdade.Text));

                Contatos.Add(c);
            }
            else
            {
                Contato c = Contatos.Find(r => r.Id == int.Parse(label1.Text));
                c.Nome = txtNome.Text;
                c.Telefone = txtTelefone.Text;
                c.Idade = int.Parse(txtIdade.Text);
            }

            dgvContatos.DataSource = null;
            dgvContatos.DataSource = Contatos;

            MessageBox.Show("Contato incluído/alterado com sucesso!");

            label1.Text = "";
            txtNome.Clear();
            txtTelefone.Clear();
            txtIdade.Clear();
            txtNome.Focus();
        }

        private void btnIncluir_Click(object sender, EventArgs e)
        {
            isInclusao = true;

            label1.Text = (Contatos.Count + 1).ToString();
            txtNome.Clear();
            txtTelefone.Clear();
            txtIdade.Clear();
            txtNome.Focus();
        }

        private void btnExcluir_Click(object sender, EventArgs e)
        {
            if (DialogResult.Yes == MessageBox.Show("Confirma a exclusão?", 
                                                    "Confirmação",
                                                    MessageBoxButtons.YesNo, MessageBoxIcon.Warning))
            {
                //Contatos.RemoveAt(int.Parse(dgvContatos.CurrentRow.Cells[0].Value.ToString())-1);
                Contatos.RemoveAt(dgvContatos.CurrentRow.Index);

                dgvContatos.DataSource = null;
                dgvContatos.DataSource = Contatos;

                MessageBox.Show("Contato excluído com sucesso!");
            }
        }
    }
}
