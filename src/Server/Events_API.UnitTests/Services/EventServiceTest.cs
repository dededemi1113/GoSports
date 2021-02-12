using Events_API.Domain.Repositories;
using Events_API.Services;
using Moq;
using Events_API.Domain.Repositories.Queries;
using Events_API.Domain.Models;
using System.Collections.Generic;
using Xunit;
using System.Threading.Tasks;

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
            this._service = new EventService(mockRepo.Object, mockUnitOfWork.Object);
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
            Event evt = new Event();
            var response = await this._service.AddAsync(evt);
            int expected = 1;

            Assert.NotNull(response);
            Assert.True(response.Success);
            Assert.Equal(expected, response.Resource.Id);
        }
        [Fact]
        public async Task UpdateAsyncTest()
        {
            Event evt = new Event();
            var response = await this._service.UpdateAsync(1, evt);
            int expected = 1;
            Assert.NotNull(response);
            Assert.True(response.Success);
            Assert.Equal(expected, response.Resource.Fields.Count);
        }
        private QueryResult<Event> GetEvents() => new QueryResult<Event>
        {
            RecordCount = 1,
            Items = new List<Event>{
                    new Event{Id=1}
                }
        };
        private Event GetEvent()
        {
            return new Event { Id = 1 };
        }
    }
}