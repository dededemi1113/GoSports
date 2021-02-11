using System.Collections.Generic;
using System.Threading.Tasks;
using Events_API.Domain.Models;
using Events_API.Domain.Repositories.Queries;

namespace Events_API.Domain.Repositories
{
    public interface IEventRepository
    {
        Task<QueryResult<Event>> ListAsync(EventsQuery query);
        Task AddAsync(Event evt);
        Task<Event> FindByIdAsync(int id);
        void Update(Event evt);
        void Remove(Event evt);

    }
}