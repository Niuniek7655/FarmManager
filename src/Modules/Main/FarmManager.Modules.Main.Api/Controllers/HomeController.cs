using Microsoft.AspNetCore.Mvc;

namespace FarmManager.Modules.Main.Api.Controllers
{
    [Route("main-modules")]
    internal class HomeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Get() => "Main API";
    }
}
