using AutoMapper;
using Events_API.Models;
using Events_API.Domain.Models;

namespace Events_API.Models.Mapping
{
    public class DTOToViewModelProfile : Profile
    {
        public DTOToViewModelProfile() : base()
        {
            CreateMap<GameTemplate, GameTemplateModel>();
            CreateMap<EventTemplate, EventTemplateModel>();
            CreateMap<FieldConfig, FieldConfigModel>();
        }
    }
}