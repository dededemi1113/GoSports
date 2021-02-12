using Newtonsoft.Json;

namespace Events_API.Domain.Models
{
    public class Player
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
    }
}