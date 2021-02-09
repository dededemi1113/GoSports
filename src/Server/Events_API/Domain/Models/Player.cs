namespace Events_API.Domain.Models
{
    public class Player : Attendee
    {
        public int TeamId { get; set; }
        public Team Team { get; set; }
    }
}