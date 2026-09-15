using Microsoft.AspNetCore.Mvc;

public class MainMenuController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}