using System;
using Events_API.Domain.Repositories;
using Events_API.Services;
using Moq;
using Events_API.Domain.Repositories.Queries;
using Events_API.Domain.Models;
using System.Collections.Generic;
using Xunit;
using System.Threading.Tasks;
using Events_API.Domain.Services;

namespace Events_API.UnitTests.Services
{
    public class EventServiceTest
    {
        private readonly EventService _service;
        public EventServiceTest()
        {
            var mockUnitOfWork = new Mock<IUnitOfWork>();
            // mockUnitOfWork.Setup(unitOfWork => unitOfWork.CompleteAsync());
            var mockRepo = new Mock<IEventRepository>();
            mockRepo.Setup(repo => repo.ListAsync(It.IsAny<EventsQuery>()))
                .ReturnsAsync(GetEvents());
            mockRepo.Setup(repo => repo.FindByIdAsync(It.IsAny<int>()))
                .ReturnsAsync(GetEvent());
            mockRepo.Setup(repo => repo.AddAsync(It.IsAny<Event>()))
                .Callback((Event evt) =>
                {
                    evt.Id = 1;
                });
            mockRepo.Setup(repo => repo.Update(It.IsAny<Event>()))
                .Callback((Event evt) =>
                {
                    evt.Fields = new List<Field> { new Field() };
                });
            mockRepo.Setup(repo => repo.Remove(It.IsAny<Event>())).Verifiable();
            var mockGameService = new Mock<IGameService>();
            mockGameService.Setup(svc => svc.ListAsync())
                .ReturnsAsync(() =>
                {
                    return new List<Game> { new Game{
                        Type=GameType.Soccer,
                        Id=1
                    } };
                });
            var mockTemplateService = new Mock<ITemplateService>();
            mockTemplateService.Setup(svc => svc.ListAsync())
                .ReturnsAsync(() =>
                {
                    return new List<GameTemplate> { new GameTemplate{
                        GameType = GameType.Soccer,
                        Events = new List<EventTemplate> {
                            new EventTemplate {
                                EventType = "FOUL",
                                FieldConfigs = new List<FieldConfig> {
                                    new FieldConfig{
                                        Id = 1
                                    }
                                }
                            }
                        }
                    } };
                });
            this._service = new EventService(mockRepo.Object, mockGameService.Object, mockTemplateService.Object, mockUnitOfWork.Object);
        }
        [Fact]
        public async Task ListAsyncTest()
        {
            var response = await this._service.ListAsync(new EventsQuery(1, 0, 10));
            int expected = 1;

            Assert.NotNull(response);
            Assert.Equal(expected, response.RecordCount);
        }
        [Fact]
        public async Task DeleteAsyncTest()
        {
            var response = await this._service.DeleteAsync(1);

            Assert.NotNull(response);
            Assert.True(response.Success);
        }
        [Fact]
        public async Task AddAsyncTest()
        {
            Event evt = GetEvent();
            var response = await this._service.AddAsync(evt);
            int expected = 1;

            Assert.NotNull(response);
            Assert.True(response.Success);
            Assert.Equal(expected, response.Resource.Id);
        }
        [Fact]
        public async Task AddAsyncTest_InvalidConfig()
        {
            Event evt = GetFalseEvent();
            var response = await this._service.AddAsync(evt);
            Assert.NotNull(response);
            Assert.False(response.Success);
            Assert.NotNull(response.Message);
            Assert.Null(response.Resource);
        }
        [Fact]
        public async Task UpdateAsyncTest()
        {
            Event evt = GetEvent();
            var response = await this._service.UpdateAsync(1, evt);
            int expected = 1;
            Assert.NotNull(response);
            Assert.True(response.Success);
            Assert.Equal(expected, response.Resource.Fields.Count);
        }
        [Fact]
        public async Task UpdateAsyncTest_InvalidConfig()
        {
            Event evt = GetFalseEvent();
            var response = await this._service.UpdateAsync(1, evt);
            Assert.NotNull(response);
            Assert.False(response.Success);
            Assert.NotNull(response.Message);
            Assert.Null(response.Resource);
        }
        private QueryResult<Event> GetEvents()
        {
            return new QueryResult<Event>
            {
                RecordCount = 1,
                Items = new List<Event>{
                    GetEvent()
                }
            };
        }
        private Event GetEvent()
        {
            return new Event
            {
                GameId = 1,
                TimeUtc = DateTime.UtcNow,
                EmployeeId = "123",
                Type = "FOUL",
                Fields = new List<Field> {
                    new Field{
                        Id=1,
                        ConfigId=1,
                        Value="value"
                    }
                }
            };
        }
        // returns an event with the false config id
        private Event GetFalseEvent()
        {
            return new Event
            {
                GameId = 1,
                TimeUtc = DateTime.UtcNow,
                EmployeeId = "123",
                Type = "FOUL",
                Fields = new List<Field> {
                    new Field{
                        Id=1,
                        ConfigId=999,
                        Value="value"
                    }
                }
            };
        }
    }
}