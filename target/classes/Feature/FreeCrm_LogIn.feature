Feature: FreeCrm LogIn Feature
Scenario Outline: Test FreeCrm LogIn with valid Credentials
Given User is on FreeCrm Login Page
When  User Enter "<username>" and "<password>"
Then User should be loggedin Successfully
And  Page Title shoud be CRMO

Examples:
| username | password |
|rahul_kumar|rahul_kumar|	
| naveenk	|	test@123 |
