using System.Collections.Generic;
using System.Threading.Tasks;
using Events_API.Domain.Models;
using Events_API.Persistence.Contexts;
using Events_API.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Events_API.Domain.Repositories.Queries;
using Xunit;
using System;

namespace Events_API.UnitTests.Repositories
{
    public class EventRepositoryTest : IDisposable
    {
        private readonly DbContextOptions<EventsDbContext> _dbOptions;
        private readonly EventsDbContext _dbContext;
        private readonly EventRepository _repository;
        public EventRepositoryTest()
        {
            _dbOptions = new DbContextOptionsBuilder<EventsDbContext>()
            .UseInMemoryDatabase(databaseName: "in-memory")
            .Options;

            _dbContext = new EventsDbContext(_dbOptions);
            _dbContext.AddRange(GetFaceEvents());
            _dbContext.SaveChanges();
            this._repository = new EventRepository(_dbContext);
        }
        [Fact]
        public async Task ListAsyncTest()
        {
            var result = await this._repository.ListAsync(new EventsQuery(1, 0, 10));

            Assert.NotNull(result);
            Assert.True(result.RecordCount > 0);
        }
        [Fact]
        public async Task FindByIdAsyncTest()
        {
            var result = await this._repository.FindByIdAsync(1);

            Assert.NotNull(result);
        }
        [Fact]
        public async Task AddAsyncTest()
        {
            Event evt = new Event { GameId = 1, Id = 0 };
            await this._repository.AddAsync(evt);

            Assert.True(evt.Id > 0);
            this._dbContext.Events.Remove(evt);
            this._dbContext.SaveChanges();
        }
        [Fact]
        public async void UpdateTest()
        {
            Event evt = await this._dbContext.Events.FirstOrDefaultAsync(ev => ev.Id == 1);
            evt.Fields = new List<Field>{
                new Field()
            };
            this._repository.Update(evt);
            this._dbContext.SaveChanges();
            evt = await this._dbContext.Events.FirstOrDefaultAsync(ev => ev.Id == 1);
            int expected = 1;
            Assert.NotNull(evt.Fields);
            Assert.Equal(expected, evt.Fields.Count);
        }
        [Fact]
        public async void RemoveTest()
        {
            int expected = await this._dbContext.Events.CountAsync();
            Event evt = new Event();
            // add directly
            this._dbContext.Add(evt);
            this._repository.Remove(evt);
            this._dbContext.SaveChanges();
            int actual = await this._dbContext.Events.CountAsync();
            Assert.Equal(expected, actual);
        }
        public void Dispose()
        {
            if (_dbContext != null)
                _dbContext.Dispose();
        }
        private List<Event> GetFaceEvents()
        {
            return new List<Event>(){
                new Event{
                    GameId = 1
                }
            };
        }
    }
}