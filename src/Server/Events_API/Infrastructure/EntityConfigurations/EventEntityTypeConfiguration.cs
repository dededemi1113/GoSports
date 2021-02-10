using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Events_API.Domain.Models;

namespace Events_API.Infrastructure.EntityConfigurations
{
    class EventEntityTypeConfiguration
            : IEntityTypeConfiguration<Event>
    {
        public void Configure(EntityTypeBuilder<Event> builder)
        {
            builder.ToTable("Event");

            builder.HasKey(evt => evt.Id);

            builder.Property(evt => evt.Id)
               .ValueGeneratedOnAdd()
               .IsRequired();

            builder.Property(evt => evt.EmployeeId)
                .IsRequired();

            builder.Property(evt => evt.GameId)
                .IsRequired();

            builder.Property(evt => evt.GameType)
                .HasConversion<int>()
                .IsRequired();

            builder.Property(evt => evt.TimeUtc)
                .IsRequired();

            builder.Property(evt => evt.Type)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(evt => evt.EmployeeId)
                .IsRequired()
                .HasMaxLength(50);

            builder.HasMany(evt => evt.Fields).WithOne(fld => fld.Event).HasForeignKey(fld => fld.EventId);
        }
    }
}