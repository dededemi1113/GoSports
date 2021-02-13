using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Events_API.Domain.Models;
using Events_API.Domain.Services;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;

namespace Events_API.Services
{
    // use the real API service to call the backend API
    public class GameMemoryService : IGameService
    {
        private readonly IMemoryCache _cache;
        // to simulate the API call we just use the data from the hard coded json file.
        private readonly string _path = "Templates/Games.json";
        private readonly string _cacheKey = "GAMES";
        public GameMemoryService(IMemoryCache cache)
        {
            this._cache = cache;
        }
        public async Task<IEnumerable<Game>> ListAsync()
        {
            // cache the games into memory, and expire every day.
            var games = await _cache.GetOrCreateAsync(_cacheKey, (entry) =>
            {
                entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromDays(1);
                return CreateSampleGames();
            });
            // update the start time for testing purpose. make sure that we alway have games to return
            foreach (var game in games)
            {
                game.DateUtc = DateTime.UtcNow.Date;
            }
            return games;
        }

        private async Task<IEnumerable<Game>> CreateSampleGames()
        {
            string json = await System.IO.File.ReadAllTextAsync(_path);
            IList<Game> games = JsonConvert.DeserializeObject<List<Game>>(json);
            return games;
        }
    }
}