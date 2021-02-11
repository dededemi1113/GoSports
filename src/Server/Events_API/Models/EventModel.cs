using System;
using System.Collections.Generic;
using Events_API.Domain.Models;

namespace Events_API.Models
{
    public class EventModel
    {
        public int Id { get; set; }
        public int GameId { get; set; }
        public GameType GameType { get; set; }
        public DateTime TimeUtc { get; set; }
        public string EmployeeId { get; set; }
        public string Type { get; set; }
        public IList<FieldModel> Fields { get; set; }
    }
}