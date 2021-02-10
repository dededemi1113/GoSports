using System.Collections.Generic;
using Newtonsoft.Json;

namespace Events_API.Domain.Models
{
    public class GameTemplate
    {
        [JsonProperty("game_type")]
        public GameType GameType { get; set; }
        [JsonProperty("events")]
        public IList<EventTemplate> Events { get; set; }
    }
}