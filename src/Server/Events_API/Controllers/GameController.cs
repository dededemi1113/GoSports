using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Events_API.Domain.Services;
using Events_API.Domain.Models;
using Events_API.Models;
using Events_API.Models.API;

namespace Events_API.Controllers
{
    [Route("/api/game")]
    [Produces("application/json")]
    [ApiController]
    public class GameController : Controller
    {
        private readonly IGameService _gameService;
        private readonly IMapper _mapper;

        public GameController(IGameService gameService, IMapper mapper)
        {
            this._gameService = gameService;
            this._mapper = mapper;
        }

        /// <summary>
        /// Lists all the available games.
        /// </summary>
        /// <returns>List of games.</returns>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<GameModel>), 200)]
        public async Task<IEnumerable<GameModel>> ListAsync()
        {
            var games = await _gameService.ListAsync();
            var result = this._mapper.Map<IEnumerable<Game>, IEnumerable<GameModel>>(games);

            return result;
        }
    }
}