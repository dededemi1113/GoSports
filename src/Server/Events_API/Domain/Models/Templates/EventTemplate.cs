using System.Collections.Generic;
using Newtonsoft.Json;

namespace Events_API.Domain.Models
{
    public class EventTemplate
    {
        [JsonProperty("event_type")]
        public string EventType { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("field_configs")]
        public IList<FieldConfig> FieldConfigs { get; set; }
    }
}