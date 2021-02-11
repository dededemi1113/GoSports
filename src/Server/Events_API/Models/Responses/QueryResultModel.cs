using System.Collections.Generic;

namespace Events_API.Models.Responses
{
    public class QueryResultModel<T>
    {
        public List<T> Items { get; set; } = new List<T>();
        public int RecordCount { get; set; } = 0;
    }
}