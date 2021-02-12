using System.Collections.Generic;
using System.Threading.Tasks;
using Events_API.Domain.Models;

namespace Events_API.Domain.Services
{
    public interface IGameService
    {
        Task<IEnumerable<Game>> ListAsync();
    }
}