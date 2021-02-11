using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Events_API.Domain.Services;
using Events_API.Domain.Models;
using Events_API.Models;
using Events_API.Models.Queries;
using Events_API.Domain.Repositories.Queries;
using Events_API.Models.Responses;

namespace Events_API.Controllers
{
    [Route("/api/event")]
    [Produces("application/json")]
    [ApiController]
    public class EventController : Controller
    {
        private readonly IEventService _eventService;
        private readonly IMapper _mapper;

        public EventController(IEventService eventService, IMapper mapper)
        {
            this._eventService = eventService;
            this._mapper = mapper;
        }

        /// <summary>
        /// Lists the events of the given game.
        /// </summary>
        /// <returns>The list of the events and the record count.</returns>
        [HttpGet]
        [ProducesResponseType(typeof(QueryResultModel<EventModel>), 200)]
        public async Task<QueryResultModel<EventModel>> ListAsync([FromQuery] EventsQueryModel query)
        {
            // convert the client query to the service query
            var eventsQuery = this._mapper.Map<EventsQueryModel, EventsQuery>(query);
            var result = await this._eventService.ListAsync(eventsQuery);

            var events = this._mapper.Map<QueryResult<Event>, QueryResultModel<EventModel>>(result);
            return events;
        }
    }
}