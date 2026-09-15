using HAKOBIMASENKA.Models.Entities;

namespace HAKOBIMASENKA.Models.ViewModels;

public class MainMenuViewModel
{
    public List<MenuCategory> Categories { get; set; }
        = new();

    public List<MenuItem> MenuItems { get; set; }
        = new();
}