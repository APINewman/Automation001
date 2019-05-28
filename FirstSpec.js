describe("Suite for validation", function() {

    it("Verify the Testcase1", function(){
        //  var a = 10;
        // var b = 20;
       // var c = a + b;
       // expect(c).toBe(30);
       // var ab = "Test String";
       // expect(this.ab).toContain("String");
        console.log("This is Spec 3")
    });

    it("Verify the Testcase2", function(){
        console.log("This is Spec 4")
        browser.get("https://symc.dev.symri.cloud")
        browser.driver.manage().window().maximize()
        browser.driver.sleep(10000)
        //expect(browser.getCurrentUrl()).toBe("https://symc-sb.sam.symantec.com/auth/")
        expect(browser.getTitle()).toBe("Symantec VIP Access Manager")
        //expect(browser.driver.getPageSource()).toBe("https://symc-sb.sam.symantec.com/auth/")
    });

    });
