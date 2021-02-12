using System.Collections.Generic;

namespace Events_API.Models.API
{
    public class TeamModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<PlayerModel> Players { get; set; }
    }
}