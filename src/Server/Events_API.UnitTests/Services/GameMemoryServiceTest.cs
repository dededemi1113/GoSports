using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Xunit;
using Events_API.Services;
using Events_API.Domain.Repositories;
using Events_API.Domain.Models;
using Moq;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.DependencyInjection;

namespace Events_API.UnitTests.Services
{
    public class GameMemoryServiceTest
    {
        private readonly GameMemoryService _service;
        public GameMemoryServiceTest()
        {
            var services = new ServiceCollection();
            services.AddMemoryCache();
            var serviceProvider = services.BuildServiceProvider();

            var memCache = serviceProvider.GetService<IMemoryCache>();
            this._service = new GameMemoryService(memCache);
        }
        [Fact]
        public async Task ListAsyncTest()
        {
            var result = await this._service.ListAsync();
            int expectedCount = 4;

            Assert.NotNull(result);
            Assert.Equal(expectedCount, result.Count());
        }
    }
}
