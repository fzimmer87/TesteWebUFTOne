Browser("ForwardCars").Page("ForwardCars").Link("Search").Click
Browser("ForwardCars").Page("ForwardCars").WebElement("admin").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebButton("Add a Car").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebList("make").Select "Mountain Motors Inc" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebList("model").Select "RLX-H" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit").Set "NAD8989" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_2").Set "50000" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_3").Set "15000" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_4").Set "1" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_5").Set "2022" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_6").Set "Red" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_7").Set "Premium" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_8").Set "2.7 V6" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_9").Set "Auto" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_10").Set "Ski Rack, Tow kit" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_11").Set "3N1CB51D35l458771" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_12").Set "inventory6.jpg" @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("WebEdit_13").Set "cars/interior6.jpg" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebButton("Create").Click @@ script infofile_;_ZIP::ssf19.xml_;_

Wait (3)
AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("car created").CheckExists True
AIUtil.FindTextBlock("car created").Highlight

AIUtil("down_triangle", micAnyText, micFromBottom, 1).LongClick
AIUtil("down_triangle", micAnyText, micFromBottom, 1).LongClick
AIUtil("down_triangle", micAnyText, micFromBottom, 1).LongClick
AIUtil.FindTextBlock("Acura RLX-H").CheckExists True
AIUtil.FindTextBlock("Acura RLX-H").Highlight
AIUtil.FindTextBlock("Price: $50000").CheckExists True
AIUtil.FindTextBlock("Price: $50000").Highlight




