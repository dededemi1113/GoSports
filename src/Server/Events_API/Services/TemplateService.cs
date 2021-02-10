using System.Collections.Generic;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Events_API.Domain.Models;
using Events_API.Domain.Services;
using Events_API.Domain.Repositories;

namespace Events_API.Services
{
    public class TemplateService : ITemplateService
    {
        private readonly ITemplateRepository _templateRepository;
        public TemplateService(ITemplateRepository templateRepository)
        {
            this._templateRepository = templateRepository;
        }
        public async Task<IEnumerable<GameTemplate>> ListAsync()
        {
            return await this._templateRepository.ListAsync();
        }
    }
}