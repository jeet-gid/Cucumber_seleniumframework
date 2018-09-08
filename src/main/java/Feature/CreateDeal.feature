Feature: Create a Deal

  Scenario Outline: Create a Deal after login
    Given User is on FreeCrm Login Page
    When User Enter "<username>" and "<password>"
    Then User should be loggedin Successfully
    And Page Title shoud be CRMO
    When user creats a deal Entering Deal Information and save the deal
      | Title     | Amount | Probability | Commision |
      | testdea1 |   1000 |          30 |        50 |
      | testdea2 |   2000 |          40 |        60 |
      | testdea3 |   3000 |          50 |        70 |
    And close the browser

    Examples: 
      | username    | password    |
      | rahul_kumar | rahul_kumar |
