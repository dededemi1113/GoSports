using System.Collections.Generic;

namespace Events_API.Domain.Models
{
    public class FieldConfig
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public FieldType Type { get; set; }
        public string Data { get; set; }
    }
}