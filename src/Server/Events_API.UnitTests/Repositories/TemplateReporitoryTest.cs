using System.Threading.Tasks;
using System.Linq;
using Xunit;
using Events_API.Persistence.Repositories;

namespace Events_API.UnitTests.Repositories
{
    public class TemplateReporitoryTest
    {
        private readonly string _path = "Templates/Soccer.json";
        private readonly TemplateRepository _repository;
        public TemplateReporitoryTest()
        {
            this._repository = new TemplateRepository(_path);
        }
        [Fact]
        public async Task ListAsyncTest()
        {
            var result = await this._repository.ListAsync();
            int expectedCount = 1;

            Assert.NotNull(result);
            Assert.Equal(expectedCount, result.Count());
        }
    }
}
