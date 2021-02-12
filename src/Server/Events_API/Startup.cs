using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Events_API.Persistence.Contexts;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Events_API.Domain.Repositories;
using Events_API.Persistence.Repositories;
using Events_API.Domain.Services;
using Events_API.Services;

namespace Events_API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Events_API", Version = "v1" });
            });
            // Set up the DbContext
            services.AddDbContext<EventsDbContext>(options => options.UseSqlite(Configuration.GetConnectionString("SqliteConnection")));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            // Add the scoped repositories/services
            services.AddScoped<ITemplateRepository>(serviceProvider => new TemplateRepository(Configuration["TemplateDirectory"]));
            services.AddScoped<ITemplateService, TemplateService>();
            services.AddScoped<IEventRepository, EventRepository>();
            services.AddScoped<IEventService, EventService>();
            // Add the real API service for the real data
            services.AddScoped<IGameService, GameMemoryService>();
            // Add AutoMapper
            services.AddAutoMapper(typeof(Startup));
            // Add memory cache
            services.AddMemoryCache();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Events_API v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
