using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        [Route("ShowPlayers")]
        public IActionResult Index(){
            var data = context.Players.ToList();
            return View(data);        
        }

        public IActionResult Create(){
            return View();
        }

        [HttpPost]
        public IActionResult Create(Player p){
            context.Players.Add(p);
            context.SaveChanges();
            return RedirectToAction("Index");
        }
        
    }
}