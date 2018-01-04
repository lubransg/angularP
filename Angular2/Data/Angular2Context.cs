using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Angular2.Models;

namespace Angular2.Models
{
    public class Angular2Context : DbContext
    {
        public Angular2Context (DbContextOptions<Angular2Context> options)
            : base(options)
        {
        }

        public DbSet<Angular2.Models.Usuarios> Usuarios { get; set; }

        public DbSet<Angular2.Models.VerificaUsuarios> VerificaUsuarios { get; set; }
    }
}
