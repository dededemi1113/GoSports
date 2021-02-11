using Events_API.Domain.Repositories;
using Events_API.Persistence.Contexts;
using System.Threading.Tasks;

namespace Events_API.Persistence.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly EventsDbContext _context;

        public UnitOfWork(EventsDbContext context)
        {
            _context = context;
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}