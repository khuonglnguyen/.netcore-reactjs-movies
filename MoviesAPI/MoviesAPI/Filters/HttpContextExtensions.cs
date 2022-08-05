using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Filters
{
    public static class HttpContextExtensions
    {
        public async static Task InsertParametersPaginationInHeader<T>(this HttpContext httpContext,IQueryable<T> queryable)
        {
            if (httpContext == null)
            {
                throw new ArgumentNullException(nameof(httpContext));
            }
            double count = await queryable.CountAsync();
            httpContext.Response.Headers.Add("totalAmountOfRecords",count.ToString());
        }
    }
}
