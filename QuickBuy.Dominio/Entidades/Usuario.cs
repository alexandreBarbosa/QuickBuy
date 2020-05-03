using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace QuickBuy.Dominio.Entidades
{
    public class Usuario
    {
        public int id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        /// <summary>
        /// Um Usuario pode ter nenhum ou muitos pedidos
        /// </summary>
        public ICollection<Pedido> Pedidos { get; set; }
    }
}
