using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2.Models
{
    public class VerificaUsuarios
    {
        [Key]
        public int id { get; set; }
        public bool existe { get; set; }
    }
}
