using AutoMapper;
using Events_API.Models;
using Events_API.Domain.Models;
using Events_API.Domain.Repositories.Queries;
using Events_API.Models.Templates;
using Events_API.Models.Responses;
using Events_API.Models.API;

namespace Events_API.Models.Mapping
{
    public class DTOToViewModelProfile : Profile
    {
        public DTOToViewModelProfile() : base()
        {
            CreateMap<GameTemplate, GameTemplateModel>();
            CreateMap<EventTemplate, EventTemplateModel>();
            CreateMap<FieldConfig, FieldConfigModel>();
            CreateMap<Field, FieldModel>();
            CreateMap<Event, EventModel>();
            CreateMap<Player, PlayerModel>();
            CreateMap<Referee, RefereeModel>();
            CreateMap<Team, TeamModel>();
            CreateMap<Game, GameModel>();
            CreateMap<QueryResult<Event>, QueryResultModel<EventModel>>();
        }
    }
}