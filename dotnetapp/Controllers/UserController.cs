using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public UserController(ApplicationDbContext _context)
        {
            context = _context;
        }

        [HttpGet]
        [Route("GetPlayers")]

        public IActionResult GetPlayers(){
            var data = context.Players.ToList();
            return Ok(data);
        }

        [HttpPost]
        [Route("AddPlayer")]
        public IActionResult PostPlayer(Player P){
            context.Players.Add(P);
            context.SaveChanges();
            return Created("Record Added", P);
        }


        [HttpPost]
        [Route("AddTeam")]

        public IActionResult PostTeam(Team T){
            context.Teams.Add(T);
            context.SaveChanges();
            return Created("Record Added", T);
        }
        
    }
}