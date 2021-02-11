namespace Events_API.Domain.Repositories.Queries
{
    public class Query
    {
        public int StartIndex { get; protected set; }
        public int FetchSize { get; protected set; }

        public Query(int startIndex, int fetchSize)
        {
            StartIndex = startIndex;
            FetchSize = fetchSize;

            if (StartIndex < 0)
            {
                StartIndex = 0;
            }

            if (FetchSize <= 0)
            {
                FetchSize = 10;
            }
        }
    }
}