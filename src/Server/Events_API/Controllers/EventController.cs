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

        /// <summary>
        /// Adds a new Event.
        /// </summary>
        /// <param name="resource">The Event data.</param>
        /// <returns>The saved Event.</returns>
        [HttpPost]
        [ProducesResponseType(typeof(EventModel), 201)]
        [ProducesResponseType(typeof(ErrorModel), 400)]
        public async Task<IActionResult> PostAsync([FromBody] SaveEventModel eventModel)
        {
            var evt = _mapper.Map<SaveEventModel, Event>(eventModel);
            var result = await this._eventService.AddAsync(evt);

            if (!result.Success)
            {
                return BadRequest(new ErrorModel(result.Message));
            }

            var eventResult = _mapper.Map<Event, EventModel>(result.Resource);
            return Ok(eventResult);
        }

        /// <summary>
        /// Updates an existing Event according to an identifier.
        /// </summary>
        /// <param name="id">The Event identifier.</param>
        /// <param name="resource">The Event data.</param>
        /// <returns>The saved Event.</returns>
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(EventModel), 201)]
        [ProducesResponseType(typeof(ErrorModel), 400)]
        public async Task<IActionResult> PutAsync(int id, [FromBody] SaveEventModel eventModel)
        {
            var evt = _mapper.Map<SaveEventModel, Event>(eventModel);

            var result = await _eventService.UpdateAsync(id, evt);

            if (!result.Success)
            {
                return BadRequest(new ErrorModel(result.Message));
            }

            var productResource = _mapper.Map<Event, EventModel>(result.Resource);
            return Ok(productResource);
        }

        /// <summary>
        /// Deletes a given Event according to the Id.
        /// </summary>
        /// <param name="id">The Event Id.</param>
        /// <returns>The deleted Event.</returns>
        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(EventModel), 200)]
        [ProducesResponseType(typeof(ErrorModel), 400)]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _eventService.DeleteAsync(id);

            if (!result.Success)
            {
                return BadRequest(new ErrorModel(result.Message));
            }

            var eventModel = _mapper.Map<Event, EventModel>(result.Resource);
            return Ok(eventModel);
        }
    }
}