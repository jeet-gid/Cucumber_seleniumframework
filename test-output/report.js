$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/My_Practise/com.freecrm.automation/src/main/java/Features/FreeCrm_LogIn.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCrm LogIn Feature",
  "description": "",
  "id": "freecrm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Test FreeCrm LogIn with valid Credentials",
  "description": "",
  "id": "freecrm-login-feature;test-freecrm-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on FreeCrm Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be loggedin Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Page Title shoud be CRMO",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "freecrm-login-feature;test-freecrm-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "freecrm-login-feature;test-freecrm-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "rahul_kumar",
        "rahul_kumar"
      ],
      "line": 10,
      "id": "freecrm-login-feature;test-freecrm-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 11,
      "id": "freecrm-login-feature;test-freecrm-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Test FreeCrm LogIn with valid Credentials",
  "description": "",
  "id": "freecrm-login-feature;test-freecrm-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on FreeCrm Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User Enter \"rahul_kumar\" and \"rahul_kumar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be loggedin Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Page Title shoud be CRMO",
  "keyword": "And "
});
formatter.match({
  "location": "FreeCrmLogInSteps.user_is_on_FreeCrm_Login_Page()"
});
formatter.result({
  "duration": 17960774995,
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
  "location": "FreeCrmLogInSteps.user_Enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 15584099379,
  "status": "passed"
});
formatter.match({
  "location": "FreeCrmLogInSteps.user_should_be_loggedin_Successfully()"
});
formatter.result({
  "duration": 21650467,
  "status": "passed"
});
formatter.match({
  "location": "FreeCrmLogInSteps.page_Title_shoud_be_CRMO()"
});
formatter.result({
  "duration": 758912275,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test FreeCrm LogIn with valid Credentials",
  "description": "",
  "id": "freecrm-login-feature;test-freecrm-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on FreeCrm Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User Enter \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be loggedin Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Page Title shoud be CRMO",
  "keyword": "And "
});
formatter.match({
  "location": "FreeCrmLogInSteps.user_is_on_FreeCrm_Login_Page()"
});
formatter.result({
  "duration": 17431011805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 12
    },
    {
      "val": "test@123",
      "offset": 26
    }
  ],
  "location": "FreeCrmLogInSteps.user_Enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 10949091289,
  "status": "passed"
});
formatter.match({
  "location": "FreeCrmLogInSteps.user_should_be_loggedin_Successfully()"
});
formatter.result({
  "duration": 28726563,
  "status": "passed"
});
formatter.match({
  "location": "FreeCrmLogInSteps.page_Title_shoud_be_CRMO()"
});
formatter.result({
  "duration": 1272239999,
  "status": "passed"
});
});