using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Events_API.Domain.Models;

namespace Events_API.Infrastructure.EntityConfigurations
{
    class FieldEntityTypeConfiguration
            : IEntityTypeConfiguration<Field>
    {
        public void Configure(EntityTypeBuilder<Field> builder)
        {
            builder.ToTable("Field");

            builder.HasKey(fld => fld.Id);

            builder.Property(fld => fld.Id)
               .ValueGeneratedOnAdd()
               .IsRequired();

            builder.Property(fld => fld.ConfigId)
                .IsRequired();

            builder.Property(fld => fld.EventId)
                .IsRequired();

            builder.Property(fld => fld.Value)
                .HasMaxLength(500);
        }
    }
}