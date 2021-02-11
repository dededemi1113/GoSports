using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Events_API.Domain.Services;
using Events_API.Domain.Models;
using Events_API.Models;
using Events_API.Models.Templates;

namespace Events_API.Controllers
{
    [Route("/api/template")]
    [Produces("application/json")]
    [ApiController]
    public class TemplateController : Controller
    {
        private readonly ITemplateService _templateService;
        private readonly IMapper _mapper;

        public TemplateController(ITemplateService templateService, IMapper mapper)
        {
            this._templateService = templateService;
            this._mapper = mapper;
        }

        /// <summary>
        /// Lists all the available templates.
        /// </summary>
        /// <returns>List of templates.</returns>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<GameTemplateModel>), 200)]
        public async Task<IEnumerable<GameTemplateModel>> ListAsync()
        {
            var templates = await _templateService.ListAsync();
            var result = this._mapper.Map<IEnumerable<GameTemplate>, IEnumerable<GameTemplateModel>>(templates);

            return result;
        }
    }
}