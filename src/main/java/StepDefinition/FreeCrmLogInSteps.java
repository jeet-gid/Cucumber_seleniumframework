//package StepDefinition;
//
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.Platform;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.firefox.FirefoxOptions;
//import org.openqa.selenium.remote.DesiredCapabilities;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class FreeCrmLogInSteps {
//
//	 WebDriver driver;
//	String url="https://www.freecrm.com";
//	
//	@Given("^User is on FreeCrm Login Page$")
//	public void user_is_on_FreeCrm_Login_Page() {
//		System.setProperty("webdriver.gecko.driver","D://My_Practise//com.freecrm.automation//drivers//geckodriver.exe");
//		DesiredCapabilities capabilities = new DesiredCapabilities();
//
//		 capabilities = DesiredCapabilities.firefox();
//		 capabilities.setBrowserName("firefox");
//		 capabilities.setVersion("your firefox version");
//		 capabilities.setPlatform(Platform.WINDOWS);
//		 capabilities.setCapability("marionette", false);
//
//		 driver = new FirefoxDriver(capabilities);
//	   driver.manage().window().maximize();
//	   driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
//	   driver.get(url);
//	}
//
//	@When("^User Enter \"(.*)\" and \"(.*)\"$")
//	public void user_Enter_username_and_password(String uname , String pwd) throws Throwable {
//		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(uname);
//		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd);
//		driver.findElement(By.xpath("//input[@value='Login']")).click();
//	}
//
//	@Then("^User should be loggedin Successfully$")
//	public void user_should_be_loggedin_Successfully() throws Throwable {
//		Assert.assertEquals("CRMPRO", driver.getTitle());
//		System.out.println("User Logged in Successfully");
//	}
//
//	@Then("^Page Title shoud be CRMO$")
//	public void page_Title_shoud_be_CRMO() throws Throwable {
//		 Assert.assertEquals("CRMPRO", driver.getTitle());
//		 driver.quit();
//	}
//}
