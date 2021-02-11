using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using Events_API.Domain.Models;
using Events_API.Domain.Services;
using Events_API.Domain.Repositories;
using Events_API.Domain.Services.Responses;
using Events_API.Domain.Repositories.Queries;

namespace Events_API.Services
{
    public class EventService : IEventService
    {
        private readonly IEventRepository _eventRepository;
        private readonly IUnitOfWork _unitOfWork;
        public EventService(IEventRepository eventRepository, IUnitOfWork unitOfWork)
        {
            this._eventRepository = eventRepository;
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
    }
}