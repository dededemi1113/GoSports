using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Events_API.Domain.Models
{
    public class Game
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        public DateTime DateUtc { get; set; }
        [JsonProperty("type")]
        public GameType Type { get; set; }
        [JsonProperty("teams")]
        public IList<Team> Teams { get; set; }
        [JsonProperty("referees")]
        public IList<Referee> Referees { get; set; }
    }
}