Set listFName = CreateObject("System.Collections.ArrayList")
Set listLName = CreateObject("System.Collections.ArrayList")
Set listUName = CreateObject("System.Collections.ArrayList")
Set listPass = CreateObject("System.Collections.ArrayList")
Window("Google Chrome").Maximize
Browser("Advantage Shopping").Page("ForwardCars").WebButton("Guest").Click
Browser("Advantage Shopping").Page("ForwardCars").WebMenu("Log In Register").Select "Register"

Dim totalRows 
totalRows = DataTable.GetSheet("Register-teste").GetRowCount 

Dim i
i = 1
While i <= totalRows 

	listFName.Add DataTable.GetSheet("Register-teste").GetParameter("FIRSTNAME").ValueByRow(i)
	listLName.Add DataTable.GetSheet("Register-teste").GetParameter("LASTNAME").ValueByRow(i)
	listUName.Add DataTable.GetSheet("Register-teste").GetParameter("USERNAME").ValueByRow(i)
	listPass.Add DataTable.GetSheet("Register-teste").GetParameter("PASSWORD").ValueByRow(i)
	
	Browser("Advantage Shopping").Page("ForwardCars").WebEdit("firstname").Set listFName.Item(i - 1)
	Browser("Advantage Shopping").Page("ForwardCars").WebEdit("lastname").Set listLName.Item(i - 1)
	Browser("Advantage Shopping").Page("ForwardCars").WebEdit("username").Set listUName.Item(i - 1)
	Browser("Advantage Shopping").Page("ForwardCars").WebEdit("password").Set listPass.Item(i - 1)
	Wait(3)
	Browser("Advantage Shopping").Page("ForwardCars").WebButton("Register").Click
	
	
	If i <> totalRows  Then
		Wait(3)
		Browser("Advantage Shopping").Page("ForwardCars").WebButton("Guest").Click
		Wait(3)
		Browser("Advantage Shopping").Page("ForwardCars").WebMenu("Log In Register").Select "Register"
	End If
	i = i+1
Wend
Wait(3)
AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("Sign In").Highlight
AIUtil.FindTextBlock("Sign In").CheckExists True

Browser("title:=.*").Close @@ script infofile_;_ZIP::ssf61.xml_;_
 @@ hightlight id_;_395062_;_script infofile_;_ZIP::ssf62.xml_;_






