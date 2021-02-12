using Newtonsoft.Json;

namespace Events_API.Domain.Models
{
    public class Referee
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
    }
}