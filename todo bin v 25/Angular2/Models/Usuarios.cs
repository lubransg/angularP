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
        public int ID_USUARIO { get; set; }
        public int ID_CLIENTE { get; set; }
        public string CLAVE { get; set; }
    }
}
