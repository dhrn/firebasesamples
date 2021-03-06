import {Injectable} from "@angular/core";
import {promise} from "selenium-webdriver";
import checkedNodeCall = promise.checkedNodeCall;
@Injectable()
export class Loginsession {

   static loginuser : boolean;
   static admin : boolean;
    constructor(){
        Loginsession.loginuser = false;
        Loginsession.admin = false;
    }
    login(){
        Loginsession.loginuser = true;
        console.log('login on server', Loginsession.loginuser);
    }
    logout(){
        Loginsession.loginuser = false;
        console.log('logout on server',Loginsession.loginuser);
    }
    adminlogin(){
        Loginsession.admin = true;
        console.log('admin on server', Loginsession.loginuser);
    }
    adminlogout(){
        Loginsession.admin = false;
        console.log('admin on server',Loginsession.loginuser);
    }
}
