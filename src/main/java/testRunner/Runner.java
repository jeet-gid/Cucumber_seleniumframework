package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="D://My_Practise//com.freecrm.automation//src//main//java//Feature//CreateDeal.feature",
				 glue={"StepDefinition"},
				 plugin={"pretty","html:test-output"},
				 dryRun=false,
				 strict=true,
				 monochrome=true
				)
public class Runner {

}
