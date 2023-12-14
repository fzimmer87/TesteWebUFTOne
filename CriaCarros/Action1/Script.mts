Browser("ForwardCars").Page("ForwardCars").Link("Search").Click
Browser("ForwardCars").Page("ForwardCars").WebElement("admin").Click

Dim totalRows 
totalRows = DataTable.GetSheet("CriaCarro-teste").GetRowCount
Dim i
i = 1
While i <= totalRows

Browser("ForwardCars").Page("ForwardCars").WebButton("Add a Car").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Wait (2) @@ script infofile_;_ZIP::ssf26.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebList("make").Select DataTable.GetSheet("CriaCarro-teste").GetParameter("dealer").ValueByRow(i) @@ script infofile_;_ZIP::ssf27.xml_;_
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebList("make_2").Select DataTable.GetSheet("CriaCarro-teste").GetParameter("make").ValueByRow(i) @@ script infofile_;_ZIP::ssf5.xml_;_
Wait (2)
Browser("ForwardCars").Page("ForwardCars").WebList("model").Select DataTable.GetSheet("CriaCarro-teste").GetParameter("model").ValueByRow(i) @@ script infofile_;_ZIP::ssf6.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("StockNumber").ValueByRow(i) @@ script infofile_;_ZIP::ssf7.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_2").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("Price").ValueByRow(i) @@ script infofile_;_ZIP::ssf8.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_3").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("Mileage").ValueByRow(i) @@ script infofile_;_ZIP::ssf9.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_4").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("Owners").ValueByRow(i) @@ script infofile_;_ZIP::ssf10.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_5").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("model year").ValueByRow(i) @@ script infofile_;_ZIP::ssf11.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_6").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("color").ValueByRow(i) @@ script infofile_;_ZIP::ssf12.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_7").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("trim").ValueByRow(i) @@ script infofile_;_ZIP::ssf13.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_8").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("engine").ValueByRow(i) @@ script infofile_;_ZIP::ssf14.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_9").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("transmission").ValueByRow(i) @@ script infofile_;_ZIP::ssf15.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_10").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("options").ValueByRow(i) @@ script infofile_;_ZIP::ssf16.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_11").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("vin").ValueByRow(i) @@ script infofile_;_ZIP::ssf17.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_12").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("Image1").ValueByRow(i) @@ script infofile_;_ZIP::ssf18.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_13").Set DataTable.GetSheet("CriaCarro-teste").GetParameter("Image2").ValueByRow(i) @@ script infofile_;_ZIP::ssf20.xml_;_
Wait (1)
Browser("ForwardCars").Page("ForwardCars").WebButton("Create").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Wait (1)
AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("car created").CheckExists True
AIUtil.FindTextBlock("car created").Highlight
AIUtil.FindTextBlock("Inventory Total: ").Highlight
Browser("ForwardCars").Page("ForwardCars").WebButton("×        Close").Click

i = i+1
Wend

Browser("title:=.*").Close

