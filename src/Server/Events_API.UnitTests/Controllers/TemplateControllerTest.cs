using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Xunit;
using Events_API.Models;
using Events_API.Domain.Services;
using Events_API.Domain.Models;
using Events_API.Controllers;
using Moq;
using AutoMapper;
using Events_API.Models.Templates;

namespace Events_API.UnitTests.Controllers
{
    public class TemplateControllerTest
    {
        private readonly TemplateController _controller;
        public TemplateControllerTest()
        {
            var mockSvc = new Mock<ITemplateService>();
            mockSvc.Setup(svc => svc.ListAsync())
                .ReturnsAsync(GetTemplates());
            var mockMapper = new Mock<IMapper>();
            mockMapper.Setup(mapper => mapper.Map<IEnumerable<GameTemplate>, IEnumerable<GameTemplateModel>>(It.IsAny<IEnumerable<GameTemplate>>()))
                .Returns(GetTemplateModels());
            this._controller = new TemplateController(mockSvc.Object, mockMapper.Object);
        }
        [Fact]
        public async Task ListAsyncTest()
        {
            var result = await this._controller.ListAsync();
            int expectedCount = 1;

            Assert.NotNull(result);
            Assert.Equal(expectedCount, result.Count());
        }

        private IEnumerable<GameTemplate> GetTemplates()
        {
            return new List<GameTemplate>{
                new GameTemplate()
            };
        }

        private IEnumerable<GameTemplateModel> GetTemplateModels()
        {
            return new List<GameTemplateModel>{
                new GameTemplateModel()
            };
        }
    }
}
