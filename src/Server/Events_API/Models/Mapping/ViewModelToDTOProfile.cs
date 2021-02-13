using AutoMapper;
using Events_API.Models;
using Events_API.Domain.Models;
using Events_API.Domain.Repositories.Queries;
using Events_API.Models.Templates;
using Events_API.Models.Queries;

namespace Events_API.Models.Mapping
{
    public class ViewModelToDTOProfile : Profile
    {
        public ViewModelToDTOProfile() : base()
        {
            CreateMap<EventsQueryModel, EventsQuery>();
            CreateMap<EventModel, Event>();
            CreateMap<FieldModel, Field>();
            CreateMap<SaveEventModel, Event>();
            CreateMap<SaveFieldModel, Field>();
        }
    }
}