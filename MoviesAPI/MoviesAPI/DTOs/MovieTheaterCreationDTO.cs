using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.DTOs
{
    public class MovieTheaterCreationDTO
    {
        [Required]
        [StringLength(75)]
        public string name { get; set; }
        [Range(-90,90)]
        public double Latitude { get; set; }
        [Range(-180, 180)]
        public double Longitude { get; set; }
    }
}
