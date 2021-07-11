import BaseUtils from '../Utilities/baseutils';
import LoginData from '../test_data/credentials';
import Url from '../url';
import amazon from '../page_object/elements';


class Amazonlogin {

    get EMAIL() {
        return $(amazon.Login);
    }

    get PASSWORD() {
        return $(amazon.password);
    }

    get LOGINBTN() {
        return $(amazon.loginBtn);
    }
    get PASSWORDBTN() {
        return $(amazon.passwordbtn);
    }
    
    get SearchInput() {
        return $(amazon.searchBox);
    }
    get SearchBtn() {
        return $(amazon.DataSearch);
    }
    get INPUTIINBOX() {
        return $(amazon.BuyNow);
    }
    get SEARCHINBTN() {
        return $(amazon.BUTTON);
    }
    get SIGNOUTBTN1() {
        return $(amazon.signoutbtn1);
    }
    get SIGNOUTBTN2() {
        return $(amazon.signoutbtn2);
    }


    Alogin() {
        browser.url(Url.amazon);
        BaseUtils.CliBtn(this.SearchBtn);
        BaseUtils.toaddValue(this.EMAIL, LoginData.emailid);
        BaseUtils.CliBtn(this.LOGINBTN);
        BaseUtils.toaddValue(this.PASSWORD, LoginData.password);
        BaseUtils.CliBtn(this.PASSWORDBTN);
        BaseUtils.CliBtn(this.SearchInput);
        BaseUtils.toaddValue(this.INPUTIINBOX, LoginData.AddSearch);
        BaseUtils.CliBtn(this.SEARCHINBTN);
        BaseUtils.CliBtn(this.SIGNOUTBTN1);
        BaseUtils.CliBtn(this.SIGNOUTBTN2);
        browser.pause(5000);
    }
}
module.exports = new Amazonlogin();