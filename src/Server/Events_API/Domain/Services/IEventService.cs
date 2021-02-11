using System.Collections.Generic;
using System.Threading.Tasks;
using Events_API.Domain.Models;
using Events_API.Domain.Repositories.Queries;
using Events_API.Domain.Services.Responses;

namespace Events_API.Domain.Services
{
    public interface IEventService
    {
        Task<QueryResult<Event>> ListAsync(EventsQuery query);
        Task<EventResponse> AddAsync(Event evt);
        Task<EventResponse> UpdateAsync(int id, Event evt);
        Task<EventResponse> DeleteAsync(int id);
    }
}