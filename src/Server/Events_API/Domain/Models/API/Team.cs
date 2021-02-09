using System.Collections.Generic;

namespace Events_API.Domain.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<Player> Players { get; set; }
    }
}