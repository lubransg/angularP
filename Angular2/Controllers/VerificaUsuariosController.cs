using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular2.Models;

namespace Angular2.Controllers
{
    [Produces("application/json")]
    [Route("api/VerificaUsuarios")]
    public class VerificaUsuariosController : Controller
    {
        private readonly Angular2Context _context;

        public VerificaUsuariosController(Angular2Context context)
        {
            _context = context;
        }

        // GET: api/VerificaUsuarios/Name/Clave
        [HttpGet("{name}/{clave}")]
        public async Task<VerificaUsuarios> GetVerificaUsuarios(string name, string clave)
        {
            string stExec = string.Format("Exec Cinthia '{0}', '{1}'", name, clave);
            return await _context.VerificaUsuarios.FromSql(stExec).FirstOrDefaultAsync();
        }
        

        private bool VerificaUsuariosExists(int id)
        {
            return _context.VerificaUsuarios.Any(e => e.id == id);
        }
    }
}