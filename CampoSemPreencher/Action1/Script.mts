Browser("ForwardCars").Page("ForwardCars").WebButton("Guest").Click
Browser("ForwardCars").Page("ForwardCars").WebMenu("Log In Register").Select "Register"

Dim totalRows 
totalRows = DataTable.GetSheet("SemPreencher-teste").GetRowCount
Dim i
i = 1 @@ script infofile_;_ZIP::ssf2.xml_;_

While i <= totalRows @@ script infofile_;_ZIP::ssf3.xml_;_
	Browser("ForwardCars").Page("ForwardCars").WebEdit("firstname").Set DataTable.GetSheet("SemPreencher-teste").GetParameter("FIRSTNAME").ValueByRow(i)
	Browser("ForwardCars").Page("ForwardCars").WebEdit("lastname").Set DataTable.GetSheet("SemPreencher-teste").GetParameter("LASTNAME").ValueByRow(i)
	Browser("ForwardCars").Page("ForwardCars").WebEdit("username").Set DataTable.GetSheet("SemPreencher-teste").GetParameter("USERNAME").ValueByRow(i)
	Browser("ForwardCars").Page("ForwardCars").WebEdit("password").Set DataTable.GetSheet("SemPreencher-teste").GetParameter("PASSWORD").ValueByRow(i) @@ script infofile_;_ZIP::ssf6.xml_;_
	Wait(1)
	Browser("ForwardCars").Page("ForwardCars").WebButton("Register").Click @@ script infofile_;_ZIP::ssf7.xml_;_

	Wait(2)
	AIUtil.SetContext Browser("creationtime:=0")
	AIUtil.FindTextBlock("Preencha este campo").Highlight
	AIUtil.FindTextBlock("Preencha este campo").CheckExists True

i = i + 1
Wend

Browser("title:=.*").Close
