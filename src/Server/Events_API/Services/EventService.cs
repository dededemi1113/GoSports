using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using Events_API.Domain.Models;
using Events_API.Domain.Services;
using Events_API.Domain.Repositories;
using Events_API.Domain.Services.Responses;
using Events_API.Domain.Repositories.Queries;
using System.Linq;

namespace Events_API.Services
{
    public class EventService : IEventService
    {
        private readonly IEventRepository _eventRepository;
        private readonly IGameService _gameService;
        private readonly ITemplateService _templateService;
        private readonly IUnitOfWork _unitOfWork;
        public EventService(IEventRepository eventRepository, IGameService gameService, ITemplateService templateService, IUnitOfWork unitOfWork)
        {
            this._eventRepository = eventRepository;
            this._gameService = gameService;
            this._templateService = templateService;
            this._unitOfWork = unitOfWork;
        }
        public Task<QueryResult<Event>> ListAsync(EventsQuery query)
        {
            // return directly
            return this._eventRepository.ListAsync(query);
        }
        public async Task<EventResponse> AddAsync(Event evt)
        {
            try
            {
                // validate 
                var games = await this._gameService.ListAsync();
                var game = games.FirstOrDefault(gm => gm.Id == evt.GameId);

                string error = await ValidateEvent(evt, game);
                if (!string.IsNullOrEmpty(error))
                {
                    return new EventResponse(error);
                }

                // update game type
                evt.GameType = game.Type;
                // update time
                evt.TimeUtc = DateTime.UtcNow;

                await this._eventRepository.AddAsync(evt);
                await this._unitOfWork.CompleteAsync();

                return new EventResponse(evt);
            }
            catch (Exception ex)
            {
                return new EventResponse($"An error occurred when adding the event: {ex.Message}");
            }
        }
        public async Task<EventResponse> UpdateAsync(int id, Event evt)
        {
            var existing = await this._eventRepository.FindByIdAsync(id);

            if (existing == null)
            {
                return new EventResponse("Event not found.");
            }
            // only update the fields
            existing.Fields = evt.Fields;

            try
            {
                // validate 
                var games = await this._gameService.ListAsync();
                var game = games.FirstOrDefault(gm => gm.Id == evt.GameId);

                string error = await ValidateEvent(evt, game);
                if (!string.IsNullOrEmpty(error))
                {
                    return new EventResponse(error);
                }

                // update game type
                evt.GameType = game.Type;

                this._eventRepository.Update(existing);
                await this._unitOfWork.CompleteAsync();

                return new EventResponse(existing);
            }
            catch (Exception ex)
            {
                return new EventResponse($"An error occurred when updating the event: {ex.Message}");
            }
        }
        public async Task<EventResponse> DeleteAsync(int id)
        {
            var existing = await this._eventRepository.FindByIdAsync(id);

            if (existing == null)
            {
                return new EventResponse("Event not found.");
            }

            try
            {
                this._eventRepository.Remove(existing);
                await this._unitOfWork.CompleteAsync();

                return new EventResponse(existing);
            }
            catch (Exception ex)
            {
                return new EventResponse($"An error occurred when deleting the event: {ex.Message}");
            }
        }

        private async Task<string> ValidateEvent(Event evt, Game game)
        {
            if (game == null)
            {
                return "The game does not exist.";
            }

            var templates = await this._templateService.ListAsync();
            var template = templates.FirstOrDefault(temp => temp.GameType == game.Type);

            if (template == null)
            {
                return "The game type does not exist.";
            }

            var eventConfig = template.Events.FirstOrDefault(eventTemplate => eventTemplate.EventType == evt.Type);

            if (eventConfig == null)
            {
                return "The event type does not exist.";
            }

            if (evt.Fields != null)
            {
                if (evt.Fields.Any(field => !eventConfig.FieldConfigs.Any(fieldConfig => fieldConfig.Id == field.ConfigId)))
                {
                    return "The field config does not exist.";
                }
            }
            return null;
        }
    }
}