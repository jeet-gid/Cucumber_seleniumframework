$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/My_Practise/com.freecrm.automation/src/main/java/Feature/CreateDeal.feature");
formatter.feature({
  "line": 1,
  "name": "Create a Deal",
  "description": "",
  "id": "create-a-deal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create a Deal after login",
  "description": "",
  "id": "create-a-deal;create-a-deal-after-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on FreeCrm Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be loggedin Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Page Title shoud be CRMO",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user creats a deal Entering Deal Information and save the deal",
  "rows": [
    {
      "cells": [
        "testdeal1",
        "1000",
        "30",
        "50"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "create-a-deal;create-a-deal-after-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "create-a-deal;create-a-deal-after-login;;1"
    },
    {
      "cells": [
        "rahul_kumar",
        "rahul_kumar"
      ],
      "line": 14,
      "id": "create-a-deal;create-a-deal-after-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Create a Deal after login",
  "description": "",
  "id": "create-a-deal;create-a-deal-after-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on FreeCrm Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enter \"rahul_kumar\" and \"rahul_kumar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be loggedin Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Page Title shoud be CRMO",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user creats a deal Entering Deal Information and save the deal",
  "rows": [
    {
      "cells": [
        "testdeal1",
        "1000",
        "30",
        "50"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CreateContact.user_is_on_FreeCrm_Login_Page()"
});
formatter.result({
  "duration": 19826156362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rahul_kumar",
      "offset": 12
    },
    {
      "val": "rahul_kumar",
      "offset": 30
    }
  ],
  "location": "CreateContact.user_Enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 15543740438,
  "status": "passed"
});
formatter.match({
  "location": "CreateContact.user_should_be_loggedin_Successfully()"
});
formatter.result({
  "duration": 41910782,
  "status": "passed"
});
formatter.match({
  "location": "CreateContact.page_Title_shoud_be_CRMO()"
});
formatter.result({
  "duration": 12957943,
  "status": "passed"
});
formatter.match({
  "location": "CreateContact.user_creats_a_deal_Entering_Deal_Information_and_save_the_deal(DataTable)"
});
formatter.result({
  "duration": 3577108831,
  "status": "passed"
});
formatter.match({
  "location": "CreateContact.close_browser()"
});
formatter.result({
  "duration": 3898891770,
  "status": "passed"
});
});