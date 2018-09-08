Feature: Create a new contact
Scenario Outline: Test Create new contact 
Given User is on FreeCrm Login Page
When  User Enter "<username>" and "<password>"
Then User should be loggedin Successfully
And  Page Title shoud be CRMO
When user enters new contact details "<FirstName>" and "<LastName>" and "<Email>"
And  user click on save button
#Then contact "<Email>" should be saved
And  close the browser
	
Examples:
| username | password | FirstName | LastName | Email |
| rahul_kumar | rahul_kumar | jk	| kumar | jk@gmail.com |