using Events_API.Domain.Models;

namespace Events_API.Models.Templates
{
    public class FieldConfigModel
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public FieldType Type { get; set; }
        public string Data { get; set; }
        public bool IsRequired { get; set; }
    }
}