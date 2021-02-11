using System.ComponentModel.DataAnnotations;

namespace Events_API.Models
{
    public class SaveFieldModel
    {
        [Required]
        public int Id { get; set; }
        [Required]
        [MaxLength(500)]
        public string Value { get; set; }
    }
}