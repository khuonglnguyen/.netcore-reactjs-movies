namespace MoviesAPI.DTOs
{
    public class PaginationDTO
    {
        public int Page { get; set; } = 1;
        public int recordsPerPage { get; set; }
        public readonly int maxRecordsPerPage = 50;
        public int RecordsPerPages
        {
            get { return recordsPerPage; }
            set { recordsPerPage = (value > maxRecordsPerPage) ? maxRecordsPerPage : value; }
        }
    }
}
