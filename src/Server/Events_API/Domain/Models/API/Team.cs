using System.Collections.Generic;
using Newtonsoft.Json;

namespace Events_API.Domain.Models
{
    public class Team
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("players")]
        public IList<Player> Players { get; set; }
    }
}