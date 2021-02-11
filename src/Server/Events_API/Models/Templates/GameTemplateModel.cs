using System.Collections.Generic;
using Events_API.Domain.Models;

namespace Events_API.Models.Templates
{
    public class GameTemplateModel
    {
        public GameType GameType { get; set; }
        public IList<EventTemplateModel> Events { get; set; }
    }
}