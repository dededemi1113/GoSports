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
using Events_API.Domain.Repositories.Queries;
using Events_API.Models.Responses;
using Events_API.Models;
using Events_API.Models.Queries;
using Events_API.Domain.Services.Responses;
using Events_API.Models.Mapping;
using Microsoft.AspNetCore.Mvc;

namespace Events_API.UnitTests.Controllers
{
    public class EventControllerTest
    {
        private readonly EventController _controller;
        public EventControllerTest()
        {
            var mockSvc = new Mock<IEventService>();
            mockSvc.Setup(svc => svc.ListAsync(It.IsAny<EventsQuery>()))
                .ReturnsAsync(GetEvents());

            mockSvc.Setup(svc => svc.AddAsync(It.IsAny<Event>()))
                .ReturnsAsync(() =>
                {
                    return new EventResponse(new Event());
                });
            mockSvc.Setup(svc => svc.UpdateAsync(It.IsAny<int>(), It.IsAny<Event>()))
                .ReturnsAsync(() =>
                {
                    return new EventResponse(new Event());
                });
            mockSvc.Setup(svc => svc.DeleteAsync(It.IsAny<int>()))
                .ReturnsAsync(() =>
                {
                    return new EventResponse(new Event());
                });

            var mockMapper = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new DTOToViewModelProfile());
                cfg.AddProfile(new ViewModelToDTOProfile());
            });
            var mapper = mockMapper.CreateMapper();
            this._controller = new EventController(mockSvc.Object, mapper);
        }
        [Fact]
        public async Task ListAsyncTest()
        {
            var result = await this._controller.ListAsync(new EventsQueryModel());

            Assert.NotNull(result);
            Assert.True(result.RecordCount > 0);
        }
        [Fact]
        public async Task PostAsyncTest()
        {
            var result = await this._controller.PostAsync(new SaveEventModel());
            var okResult = result as OkObjectResult;
            Assert.NotNull(result);
            Assert.Equal(200, okResult.StatusCode);
        }
        [Fact]
        public async Task PutAsyncTest()
        {
            var result = await this._controller.PutAsync(1, new SaveEventModel());
            var okResult = result as OkObjectResult;
            Assert.NotNull(result);
            Assert.Equal(200, okResult.StatusCode);
        }
        [Fact]
        public async Task DeleteAsyncTest()
        {
            var result = await this._controller.DeleteAsync(1);
            var okResult = result as OkObjectResult;
            Assert.NotNull(result);
            Assert.Equal(200, okResult.StatusCode);
        }
        private QueryResult<Event> GetEvents()
        {
            return new QueryResult<Event>
            {
                RecordCount = 1,
                Items = new List<Event>{
                    new Event()
                }
            };
        }

        private Event GetEvent()
        {
            return new Event();
        }

        private QueryResultModel<EventModel> GetEventModels()
        {
            return new QueryResultModel<EventModel>
            {
                RecordCount = 1,
                Items = new List<EventModel>{
                    new EventModel()
                }
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
