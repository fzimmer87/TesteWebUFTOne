Browser("ForwardCars").Page("ForwardCars").WebButton("Guest").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebMenu("Log In Register").Select "Log In" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("username").Set "lucialves1" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebEdit("password").SetSecure "123456" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("ForwardCars").Page("ForwardCars").WebButton("Sign In").Click
Browser("ForwardCars").Page("ForwardCars").Link("Loan Application").Click @@ script infofile_;_ZIP::ssf6.xml_;_


Dim totalRows 
totalRows = DataTable.GetSheet("Emprestimo-teste").GetRowCount
Dim i
i = 1
While i <= totalRows 
Browser("ForwardCars").Page("ForwardCars").Link("Loan Application").Click
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebEdit("address-line1").Set DataTable.GetSheet("Emprestimo-teste").GetParameter("Endereco").ValueByRow(i) @@ script infofile_;_ZIP::ssf8.xml_;_
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebEdit("city").Set DataTable.GetSheet("Emprestimo-teste").GetParameter("Cidade").ValueByRow(i)
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebEdit("state").Set DataTable.GetSheet("Emprestimo-teste").GetParameter("Estado").ValueByRow(i)
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebEdit("postal-code").Set DataTable.GetSheet("Emprestimo-teste").GetParameter("Cep").ValueByRow(i)
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebEdit("dob").Set DataTable.GetSheet("Emprestimo-teste").GetParameter("DataNasc").ValueByRow(i)
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebEdit("ssn").Set DataTable.GetSheet("Emprestimo-teste").GetParameter("Ssn").ValueByRow(i)
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebEdit("employer").Set DataTable.GetSheet("Emprestimo-teste").GetParameter("Empresa").ValueByRow(i)
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebEdit("phone").Set DataTable.GetSheet("Emprestimo-teste").GetParameter("Tel").ValueByRow(i)
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebEdit("ltJob").Set DataTable.GetSheet("Emprestimo-teste").GetParameter("TempoTrabalho").ValueByRow(i)
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebEdit("yIncome").Set DataTable.GetSheet("Emprestimo-teste").GetParameter("ValorFInan").ValueByRow(i)
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebButton("36 mo").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebButton("Apply").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Wait(2)
Browser("ForwardCars").Page("ForwardCars").WebButton("OK").Click @@ script infofile_;_ZIP::ssf23.xml_;_
	i = i+1
Wend
Browser("title:=.*").Close
