namespace Events_API.Domain.Repositories.Queries
{
    public class EventsQuery : Query
    {
        public int? GameId { get; set; }
        public EventsQuery(int? gameId, int startIndex, int fetchSize) : base(startIndex, fetchSize)
        {
            this.GameId = gameId;
        }
    }
}