using FarmManager.Modules.Main.Core;
using Microsoft.Extensions.DependencyInjection;
using System.Runtime.CompilerServices;

[assembly: InternalsVisibleTo("FarmManager.Bootstrapper")]
namespace FarmManager.Modules.Main.Api
{
    internal static class Extensions
    {
        public static IServiceCollection AddMain(this IServiceCollection services)
        {
            services.AddCore();
            return services;
        }
    }
}
