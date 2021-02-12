using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Xunit;
using Events_API.Models.API;
using Events_API.Domain.Services;
using Events_API.Domain.Models;
using Events_API.Controllers;
using Moq;
using AutoMapper;
using Events_API.Models.Templates;

namespace Events_API.UnitTests.Controllers
{
    public class GameControllerTest
    {
        private readonly GameController _controller;
        public GameControllerTest()
        {
            var mockSvc = new Mock<IGameService>();
            mockSvc.Setup(svc => svc.ListAsync())
                .ReturnsAsync(GetGames());
            var mockMapper = new Mock<IMapper>();
            mockMapper.Setup(mapper => mapper.Map<IEnumerable<Game>, IEnumerable<GameModel>>(It.IsAny<IEnumerable<Game>>()))
                .Returns(GetGameModels());
            this._controller = new GameController(mockSvc.Object, mockMapper.Object);
        }
        [Fact]
        public async Task ListAsyncTest()
        {
            var result = await this._controller.ListAsync();
            int expectedCount = 1;

            Assert.NotNull(result);
            Assert.Equal(expectedCount, result.Count());
        }

        private IEnumerable<Game> GetGames()
        {
            return new List<Game>{
                new Game()
            };
        }

        private IEnumerable<GameModel> GetGameModels()
        {
            return new List<GameModel>{
                new GameModel()
            };
        }
    }
}
