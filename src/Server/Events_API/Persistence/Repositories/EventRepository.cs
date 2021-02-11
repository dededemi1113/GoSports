using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Events_API.Domain.Models;
using Events_API.Domain.Repositories;
using Events_API.Persistence.Contexts;
using Events_API.Domain.Repositories.Queries;

namespace Events_API.Persistence.Repositories
{
    public class EventRepository : BaseRepository, IEventRepository
    {
        public EventRepository(EventsDbContext context) : base(context) { }

        public async Task<QueryResult<Event>> ListAsync(EventsQuery query)
        {
            // include all the fields. no tracking for performance.
            IQueryable<Event> queryable = _context.Events.Include(evt => evt.Fields).AsNoTracking();

            if (query.GameId.HasValue && query.GameId.Value > 0)
            {
                queryable = queryable.Where(evt => evt.GameId == query.GameId);
            }
            // get total count first
            int recordCount = await queryable.CountAsync();
            // get the records
            List<Event> events = await queryable.Skip(query.StartIndex).Take(query.FetchSize).ToListAsync();
            // return the combination
            return new QueryResult<Event>
            {
                Items = events,
                RecordCount = recordCount,
            };
        }

        public async Task<Event> FindByIdAsync(int id)
        {
            return await this._context.Events.Include(evt => evt.Fields).FirstOrDefaultAsync(evt => evt.Id == id);
        }

        public async Task AddAsync(Event evt)
        {
            // add directly
            await _context.Events.AddAsync(evt);
        }

        public void Update(Event evt)
        {
            _context.Events.Update(evt);
        }

        public void Remove(Event evt)
        {
            _context.Events.Remove(evt);
        }
    }
}