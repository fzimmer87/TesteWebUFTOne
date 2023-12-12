Dim xpathGuest 
xpathGuest = "xpath:=/html/body/div[1]/div[1]/div/div/div[2]/ul/li[5]/a/span[1]"

Browser("ForwardCars").Page("ForwardCars").WebButton("Guest").Click
Browser("ForwardCars").Page("ForwardCars").WebMenu("Log In Register").Select "Log In"

Dim totalRows 
totalRows = DataTable.GetSheet("Login-teste").GetRowCount
Dim i
i = 1

While i <= totalRows
	Browser("ForwardCars").Page("ForwardCars").WebEdit("username").Set DataTable.GetSheet("Login-teste").GetParameter("USERNAME").ValueByRow(i)
	Browser("ForwardCars").Page("ForwardCars").WebEdit("password").Set DataTable.GetSheet("Login-teste").GetParameter("PASSWORD").ValueByRow(i)
	Wait(3)
	Browser("ForwardCars").Page("ForwardCars").WebButton("Sign In").Click
	
	If i <> totalRows Then
		Wait(2)
		AIUtil.SetContext Browser("creationtime:=0")
		Browser("ForwardCars").Page("ForwardCars").WebElement(xpathGuest).Click														            
		AIUtil.FindTextBlock("Logout").CheckExists True
		Browser("ForwardCars").Page("ForwardCars").WebMenu("Log In Register").Select "Logout"
		Wait(1)
		Browser("ForwardCars").Page("ForwardCars").WebButton("Guest").Click
		Browser("ForwardCars").Page("ForwardCars").WebMenu("Log In Register").Select "Log In"
	
	End If
	i = i + 1
Wend @@ script infofile_;_ZIP::ssf25.xml_;_
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebElement("xpath:=/html/body/div[1]/div[1]/div/div/div[2]/ul/li[5]/a/span[1]").Click
AIUtil.FindTextBlock("Logout").CheckExists True
Browser("title:=.*").Close
