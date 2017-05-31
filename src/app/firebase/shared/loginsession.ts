import {Injectable} from "@angular/core";
import {promise} from "selenium-webdriver";
import checkedNodeCall = promise.checkedNodeCall;
@Injectable()
export class Loginsession {

   static loginuser : boolean;

    constructor(){
        Loginsession.loginuser = false;
    }
    login(){
        Loginsession.loginuser = true;
        console.log('login on server', Loginsession.loginuser);
    }
    logout(){
        Loginsession.loginuser = false;
        console.log('logout on server',Loginsession.loginuser);
    }
}
