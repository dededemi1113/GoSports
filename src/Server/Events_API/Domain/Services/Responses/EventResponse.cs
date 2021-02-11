using Events_API.Domain.Models;

namespace Events_API.Domain.Services.Responses
{
    public class EventResponse : BaseResponse<Event>
    {
        public EventResponse(Event evt) : base(evt) { }

        public EventResponse(string message) : base(message) { }
    }
}