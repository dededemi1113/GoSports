using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Events_API.Persistence.Contexts;

namespace Events_API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            // Ensure the database is created
            ensureDatabase(host);

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

        private static void ensureDatabase(IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                using (var context = scope.ServiceProvider.GetService<EventsDbContext>())
                {
                    context.Database.EnsureCreated();
                }
            }
        }
    }
}
