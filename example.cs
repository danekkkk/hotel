// QuotesPage.xaml.cs
public string[] Quotes = 
{
    "Jeśli potrafisz o czymś marzyć, to potrafisz tego dokonać.",
    "Móc czegoś nie chcieć, to już jest szczeście.",
    "Każdą pracę wykonuj, jakby miała ona być ostatnią w życiu."
};

public int QuoteNum = 0;

public QuotesPage()
{
    InitializeComponent();
    quoteLabel.Text = quotes[QuoteNum];
}

public void ChangeQuote(object sender, EventArgs e)
{
    
    QuoteNum++;
    if (QuoteNum > Quotes.Length) {
        QuoteNum = 0;
    }
    quoteLabel.Text = quotes[QuoteNum];
  
}

// QuotesPage.xaml
<Button Text="Next"
        Clicked="ChangeQuote"
        HorizontalOptions="Center"
/>
<Label Text="{Binding Source={x:Reference FontSizeSlider}, Path=Value, StringFormat='Font Size: {0:F2}'}" />
<Slider x:Name="FontSizeSlider" Maximum="50" Minimum="16" Value="16" />
<Label x:Name="quoteLabel" FontSize="{Binding Source={x:Reference FontSizeSlider}, Path=Value}" />
