using System.Collections.Generic;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Events_API.Domain.Models;
using Events_API.Domain.Repositories;

namespace Events_API.Persistence.Repositories
{
    public class TemplateRepository : ITemplateRepository
    {
        private readonly string _path;
        public TemplateRepository(string path)
        {
            this._path = path;
        }
        public async Task<IEnumerable<GameTemplate>> ListAsync()
        {
            string json = await System.IO.File.ReadAllTextAsync(this._path);
            GameTemplate template = JsonConvert.DeserializeObject<GameTemplate>(json);
            return new List<GameTemplate> { template };
        }
    }
}