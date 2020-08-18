const { Builder, By, Key, util } = require("selenium-webdriver");

async function loadWebsite (){
    let driver = await new Builder().forBrowser("firefox").build(); 
    await driver.get("https://dev-1.clicktrans.pl/register-test/courier");
    await driver.findElement(By.id("user_register_company_name")).sendKeys("natalia company");
    await driver.findElement(By.id("user_register_email")).sendKeys("natalia@comany.com");
    await driver.findElement(By.id("user_register_name")).sendKeys("Natalia Test");
    await driver.findElement(By.id("user_register_phone")).sendKeys("123456789");
    await driver.findElement(By.id("user_register_plainPassword")).sendKeys("12345678");
    await driver.findElement(By.id("user_register_settings_agreementRegulations")).click();
    await driver.findElement(By.id("user_register_settings_agreementPersonalData")).click();
    await driver.findElement(By.id("user_register_settings_agreementMarketing")).click(); 
    await driver.findElement(By.id("user_register_submit")).click();
    let msg = await (await driver.findElement(By.xpath("/html/body/div[6]/div"))).getText();
    
    //const assert = require("assert"); 
    //assert(msg === "OK - some registration logic is mocked"); 

    if (msg !== "OK - some registration logic is mocked"){
        console.log("wrong message: " + msg); 
    }
    else{
        console.log("Test passed"); 
    }
}

loadWebsite(); 
