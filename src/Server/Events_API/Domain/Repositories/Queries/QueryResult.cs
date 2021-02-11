using System.Collections.Generic;

namespace Events_API.Domain.Repositories.Queries
{
    public class QueryResult<T>
    {
        public List<T> Items { get; set; } = new List<T>();
        public int RecordCount { get; set; } = 0;
    }
}