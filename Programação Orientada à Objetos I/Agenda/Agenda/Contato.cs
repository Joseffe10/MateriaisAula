using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Agenda
{
    public class Contato
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public int Idade { get; set; }

        public Contato()
        {

        }

        public Contato(int id, string nome, string telefone, int idade)
        {
            this.Id = id;
            this.Nome = nome;
            this.Telefone = telefone;
            this.Idade = idade;
        }
    }
}
