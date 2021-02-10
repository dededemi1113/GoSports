namespace Events_API.Domain.Models
{
    public class Field
    {
        public int Id { get; set; }
        public int ConfigId { get; set; }
        public int EventId { get; set; }
        public Event Event { get; set; }
        public string Value { get; set; }
    }
}