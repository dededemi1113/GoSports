using Newtonsoft.Json;

namespace Events_API.Domain.Models
{
    public class FieldConfig
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("question")]
        public string Question { get; set; }
        [JsonProperty("type")]
        public FieldType Type { get; set; }
        [JsonProperty("data")]
        public string Data { get; set; }
        [JsonProperty("is_required")]
        public bool IsRequired { get; set; }
    }
}