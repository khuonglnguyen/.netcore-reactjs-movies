using System.Collections.Generic;

namespace MoviesAPI.DTOs
{
    public class LandingPageDTO
    {
        public List<MovieDTO> InTheaters{ get; set; }
        public List<MovieDTO> UpcommingReleases{ get; set; }
    }
}
