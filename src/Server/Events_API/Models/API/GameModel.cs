using System;
using System.Collections.Generic;
using Events_API.Domain.Models;

namespace Events_API.Models.API
{
    public class GameModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateUtc { get; set; }
        public GameType Type { get; set; }
        public IList<TeamModel> Teams { get; set; }
        public IList<RefereeModel> Referees { get; set; }
    }
}