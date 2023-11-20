using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers{

    [ApiController]
    [Route("/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public AdminController(ApplicationDbContext _context)
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
            if(ModelState.IsValid){
                try{
                    context.Teams.Add(T);
                    context.SaveChanges();
                    
                }
                catch(Exception ex){
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Created("Record Added", T);
            
           
        }

        [HttpGet]
        [Route("GetTeams")]

        public IActionResult GetTeams(){
            var data = context.Teams.ToList();
            return Ok(data);
        }

        [HttpPut]
        [Route("EditPlayer/{id}")]

        public IActionResult PutPlayer(int id, Player P){
            if(ModelState.IsValid)
            {
            Player EditP = context.Players.Find(id);
            EditP.Name = P.Name;
            EditP.Age = P.Age;
            EditP.Category = P.Category;
            EditP.BiddingPrice =P.BiddingPrice;
            EditP.TeamId = P.TeamId;
            context.SaveChanges();
            return Ok();
            }
            return BadRequest("Unable to edit player.");
        }

        [HttpDelete]
        [Route("DeletePlayer/{id}")]

        public IActionResult DeletePlayer(int id){
            var data = context.Players.Find(id);
            if(data == null){
                return NotFound();
            }
            context.Remove(data);
            context.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteTeam/{id}")]

        public IActionResult DeleteTeam(int id){
            Team T = context.Teams.Find(id);
            context.Teams.Remove(T);
            context.SaveChanges();
            return Ok();
        }
        
    }
}