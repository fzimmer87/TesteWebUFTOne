Dim totalRows 
totalRows = DataTable.GetSheet("Pesquisa-teste").GetRowCount
Dim i
i = 1
Browser("ForwardCars").Page("ForwardCars").Link("Search").Click
	
Dim result 
 @@ script infofile_;_ZIP::ssf9.xml_;_
While  i <= totalRows
	result = DataTable.GetSheet("Pesquisa-teste").GetParameter("Result").ValueByRow(i)
	Browser("ForwardCars").Page("ForwardCars").WebEdit("Year, Color...").Set DataTable.GetSheet("Pesquisa-teste").GetParameter("PesqVeiculo").ValueByRow(i)
	AIUtil.SetContext Browser("creationtime:=1")
	Wait (2)
       AIUtil.FindTextBlock(result,micFromLeft, 1).CheckExists True
	'AIUtil.FindTextBlock(result, micFromLeft, 1).Highligh
	
	
	If i <> totalRows Then		
		Browser("ForwardCars").Page("ForwardCars").WebButton("Clear Search").Click

	End If
i = i + 1
Wend
Browser("title:=.*").Close




 @@ script infofile_;_ZIP::ssf6.xml_;_
 @@ script infofile_;_ZIP::ssf7.xml_;_

