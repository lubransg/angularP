using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2.Models
{
    public class Usuarios
    {
        [Key]
        public int id_usuario { get; set; }
        public string name { get; set; }
        public string clave { get; set; }
    }
}
