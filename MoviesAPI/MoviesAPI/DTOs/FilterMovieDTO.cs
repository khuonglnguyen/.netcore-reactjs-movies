namespace MoviesAPI.DTOs
{
    public class FilterMovieDTO
    {
        public int Page { get; set; }
        public int RecordsPerPage { get; set; }
        public PaginationDTO PaginationDTO
        {
            get
            {
                return new PaginationDTO() { Page = Page, RecordsPerPage = RecordsPerPage };
            }
        }
        public string Title { get; set; }
        public int GenreId { get; set; }
        public bool InTheaters { get; set; }
        public bool UpcommingReleases { get; set; }
    }
}
