using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingsController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly UserManager<IdentityUser> userManager;

        public RatingsController(ApplicationDbContext context, UserManager<IdentityUser> userManager)
        {
            this.context = context;
            this.userManager = userManager;
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult> Post([FromBody] RatingDTO ratingDTO)
        {
            var email = HttpContext.User.Claims.FirstOrDefault(x => x.Type == "email").Value;
            var user = await userManager.FindByNameAsync(email);
            var userId = user.Id;

            var currentRate = await context.Ratings
                .FirstOrDefaultAsync(x => x.MovieId == ratingDTO.MovieId && x.UserId == userId);

            if (currentRate == null)
            {
                var rating = new Rating();
                rating.MovieId = ratingDTO.MovieId;
                rating.Rate = ratingDTO.Rating;
                rating.UserId = userId;
                context.Add(rating);
            }
            else
            {
                currentRate.Rate = ratingDTO.Rating;
            }

            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
