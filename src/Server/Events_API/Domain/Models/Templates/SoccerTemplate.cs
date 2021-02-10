using System.Collections.Generic;

namespace Events_API.Domain.Models
{
    public class EventTemplate
    {
        public int Id { get; set; }
        public GameType GameType { get; set; }
        public string EventType { get; set; }
        public IList<FieldConfig> FieldConfigs { get; set; }
    }
}