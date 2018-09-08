package StepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CreateContact {
	 WebDriver driver;
		String url="https://www.freecrm.com";
		
		@Given("^User is on FreeCrm Login Page$")
		public void user_is_on_FreeCrm_Login_Page() {
			System.setProperty("webdriver.gecko.driver","D://My_Practise//com.freecrm.automation//drivers//geckodriver.exe");
			DesiredCapabilities capabilities = new DesiredCapabilities();

			 capabilities = DesiredCapabilities.firefox();
			 capabilities.setBrowserName("firefox");
			 capabilities.setVersion("your firefox version");
			 capabilities.setPlatform(Platform.WINDOWS);
			 capabilities.setCapability("marionette", false);

			 driver = new FirefoxDriver(capabilities);
		   driver.manage().window().maximize();
		   driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		   driver.get(url);
		}

		@When("^User Enter \"(.*)\" and \"(.*)\"$")
		public void user_Enter_username_and_password(String uname , String pwd) throws Throwable {
			driver.findElement(By.xpath("//input[@name='username']")).sendKeys(uname);
			driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd);
			driver.findElement(By.xpath("//input[@value='Login']")).click();
		}

		@Then("^User should be loggedin Successfully$")
		public void user_should_be_loggedin_Successfully() throws Throwable {
			Assert.assertEquals("CRMPRO", driver.getTitle());
			System.out.println("User Logged in Successfully");
		}

		@Then("^Page Title shoud be CRMO$")
		public void page_Title_shoud_be_CRMO() throws Throwable {
			 Assert.assertEquals("CRMPRO", driver.getTitle());
	//		 driver.quit();
		}
	
	@Given("^user is loggedIn$")
	public void user_is_loggedIn() {
		Assert.assertEquals("CRMPRO", driver.getTitle());
	    
	}

	@When("^user enters new contact details \"(.*?)\" and \"(.*?)\" and \"(.*?)\"$")
	public void user_enters_new_contact_details_and(String firstName, String lastName , String email) {
	    driver.switchTo().frame("mainpanel");
		Actions action=new Actions(driver);
	    action.moveToElement(driver.findElement(By.xpath("//a[@title='Contacts']"))).build().perform();
		driver.findElement(By.xpath("//a[@title='New Contact']")).click();
		driver.findElement(By.id("first_name")).sendKeys(firstName);
		driver.findElement(By.id("surname")).sendKeys(lastName);
		driver.findElement(By.id("email")).sendKeys(email);
		
	}

	@And("^user click on save button$")
	public void clicks_on_save_button(){
		driver.findElement(By.xpath("//input[@value='Save']")).click();
		 
	}

//	@Then("^contact \"(.*)\" should be saved$")
//	public void contact_Should_be_saved(String email){
//		driver.switchTo().defaultContent();
//		driver.switchTo().frame("mainpanel");
//		System.out.println("hello---------------------------");
//		Actions action=new Actions(driver);
//		  action.moveToElement(driver.findElement(By.xpath("//a[@title='Contacts']"))).build().perform();
//		  driver.findElement(By.xpath("//a[@title='Full Search Form']")).click();
//		  driver.findElement(By.xpath("//input[@value='Search Contacts']")).click(); 
//		  driver.findElement(By.name("cs_email")).sendKeys(email);
//		  String actual_email=driver.findElement(By.xpath("//table/tbody/tr[4]/td[7]/a")).getText();
//		  Assert.assertEquals(email,  actual_email);
//	}
	
	@When("^user creats a deal Entering Deal Information and save the deal$")
	public void user_creats_a_deal_Entering_Deal_Information_and_save_the_deal(DataTable data){
		driver.switchTo().frame("mainpanel");
		Actions action=new Actions(driver);
	    action.moveToElement(driver.findElement(By.xpath("//a[@title='Deals']"))).build().perform();
	    driver.findElement(By.xpath("//a[@title='New Deal']")).click();
	    	List<List<String>> dealDate=data.raw();
	    driver.findElement(By.id("title")).sendKeys(dealDate.get(0).get(0));
	    driver.findElement(By.id("amount")).sendKeys(dealDate.get(0).get(1));
	    driver.findElement(By.id("probability")).sendKeys(dealDate.get(0).get(2));
	    driver.findElement(By.id("commission")).sendKeys(dealDate.get(0).get(3));
		driver.findElement(By.xpath("//table/tbody/tr[1]/td/input[1][@type='submit']")).click();
		System.out.println("---Deal Saved----");
	}
	
	@And("^close the browser$")
	public void close_browser(){
		driver.switchTo().defaultContent();
		driver.quit();
	}
}
