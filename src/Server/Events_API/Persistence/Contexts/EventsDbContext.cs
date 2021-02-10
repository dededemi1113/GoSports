using Microsoft.EntityFrameworkCore;
using Events_API.Domain.Models;
using Events_API.Infrastructure.EntityConfigurations;

namespace Events_API.Persistence.Contexts
{
    public class EventsDbContext : DbContext
    {
        public EventsDbContext(DbContextOptions<EventsDbContext> options) : base(options)
        { }
        public DbSet<Event> Events { get; set; }
        public DbSet<Field> Fields { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new EventEntityTypeConfiguration());
            builder.ApplyConfiguration(new FieldEntityTypeConfiguration());
        }
    }
}