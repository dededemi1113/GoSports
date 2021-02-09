using System;
using System.Collections.Generic;

namespace Events_API.Domain.Models
{
    public class Event
    {
        public int Id { get; set; }
        public int GameId { get; set; }
        public GameType GameType { get; set; }
        public DateTime TimeUtc { get; set; }
        public string EmployeeId { get; set; }
        public string Type { get; set; }
        public IList<Field> Fields { get; set; }
    }
}