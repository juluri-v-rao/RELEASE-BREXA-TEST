namespace HAKOBIMASENKA.Models.Entities;

public class MenuItem
{
    public string CategoryCode { get; set; } = "";
    public string MenuName { get; set; } = "";
    public string ScreenCode { get; set; } = "";
    public int DisplayOrder { get; set; }
}