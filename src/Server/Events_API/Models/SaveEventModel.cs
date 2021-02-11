using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Events_API.Models
{
    public class SaveEventModel
    {
        [Required]
        public int GameId { get; set; }
        [Required]
        public DateTime TimeUtc { get; set; }
        [Required]
        public string EmployeeId { get; set; }
        [Required]
        [MaxLength(50)]
        public string Type { get; set; }
        public IList<SaveFieldModel> Fields { get; set; }
    }
}