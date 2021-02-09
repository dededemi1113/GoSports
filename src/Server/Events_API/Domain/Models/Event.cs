using System;

namespace Events_API.Domain.Models
{
    public class Event
    {
        public int Id { get; set; }
        public Game Game { get; set; }
        public DateTime TimeUtc { get; set; }
        public string EmployeeId { get; set; }
        public string Type { get; set; }
    }
}