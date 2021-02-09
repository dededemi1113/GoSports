using System;
using System.Collections.Generic;

namespace Events_API.Domain.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime TimeStartUtc { get; set; }
        public GameType Type { get; set; }
        public IList<Team> Teams { get; set; }
    }
}