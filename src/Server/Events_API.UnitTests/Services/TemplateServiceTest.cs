using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Xunit;
using Events_API.Services;
using Events_API.Domain.Repositories;
using Events_API.Domain.Models;
using Moq;

namespace Events_API.UnitTests.Services
{
    public class TemplateServiceTest
    {
        private readonly TemplateService _service;
        public TemplateServiceTest()
        {
            var mockRepo = new Mock<ITemplateRepository>();
            mockRepo.Setup(repo => repo.ListAsync())
                .ReturnsAsync(GetTemplates());
            this._service = new TemplateService(mockRepo.Object);
        }
        [Fact]
        public async Task ListAsyncTest()
        {
            var result = await this._service.ListAsync();
            int expectedCount = 1;

            Assert.NotNull(result);
            Assert.Equal(expectedCount, result.Count());
        }

        private IEnumerable<GameTemplate> GetTemplates()
        {
            return new List<GameTemplate>{
                new GameTemplate{

                }
            };
        }
    }
}
