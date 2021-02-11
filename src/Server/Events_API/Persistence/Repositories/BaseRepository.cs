using Events_API.Persistence.Contexts;

namespace Events_API.Persistence.Repositories
{
    public abstract class BaseRepository
    {
        protected readonly EventsDbContext _context;

        public BaseRepository(EventsDbContext context)
        {
            _context = context;
        }
    }
}