﻿using System;
using System.Web.DynamicData;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Windows.Forms;
using TextBox = System.Web.UI.WebControls.TextBox;

public partial class Cart : System.Web.UI.Page
{
    private string User;
    private bool IsLoggedIn => User != "LOG IN/SIGN UP";

    protected void Page_Load(object sender, EventArgs e)
    {
        var loginCookie = Request.Cookies[Constants.LOGIN_COOKIE];
        var user = loginCookie?.Values[Constants.LOGIN_USER];
        var loggedIn = loginCookie != null && !string.IsNullOrEmpty(user);
        loginSignUp.Text = loggedIn ? $"{user}" : "LOG IN/SIGN UP";
        User = loginSignUp.Text;
        UpdateCart();
        GetTotal();
        cartPanel.Update();
    }

    private void GetTotal()
    {
        var orders = Connection.GetOrdersForUser(User);
        var tot = 0.0;
        foreach (var order in orders)
        {
            var tbx = (TextBox)computerContent.FindControl($"id_{order.TableRowId}");
            var qty = Int32.Parse(tbx.Text);
            tot += order.TotalPrice * qty;
        }

        total.Text = tot.ToString("C");
    }

    private void UpdateCart()
    {
        if (!IsLoggedIn)
            return;

        var orders = Connection.GetOrdersForUser(User);
        foreach (var order in orders)
        {
            var img = new Image {ImageUrl = order.Item.ImgUrl};
            img.Style["width"] = "256px";
            img.Style["height"] = "256px";
            img.Style["display"] = "inline-block";

            computerContent.Controls.Add(img);

            var details = new TextBox
            {
                TextMode = TextBoxMode.MultiLine,
                ReadOnly = true,
                Text = order.Summary
            };
            details.Style["display"] = "inline-block";
            computerContent.Controls.Add(details);

            computerContent.Controls.Add(new LiteralControl("<br />"));

            var qty = new TextBox
            {
                TextMode = TextBoxMode.Number,
                Text = order.Qty.ToString(),
                ID = $"id_{order.TableRowId}",
                AutoPostBack = true
            };
            qty.Style["display"] = "inline";
            qty.Style["width"] = "50px";
            qty.TextChanged += UpdateOrder;
            computerContent.Controls.Add(qty);
            computerContent.Controls.Add(new LiteralControl("<hr />"));
        }
    }

    private void UpdateOrder(object sender, EventArgs e)
    {
        var tbx = (TextBox) sender;
        var id = tbx.ID;
        id = id.Replace("id_", "");
        var orderId = Int32.Parse(id);
        Connection.UpdateOrderQty(orderId, Int32.Parse(tbx.Text));
        GetTotal();
        cartPanel.Update();
    }
}