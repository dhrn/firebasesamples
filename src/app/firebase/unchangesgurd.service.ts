import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot} from "@angular/router";
import {GetfromfirebaseComponent} from "./getfromfirebase/getfromfirebase.component";
import {Loginsession} from "./shared/loginsession";
import {AdduserComponent} from "./adduser/adduser.component";

@Injectable()
export class UnchangesgurdService implements CanDeactivate<AdduserComponent>{

  constructor(private router:Router) { }


  canDeactivate(component: AdduserComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {
    console.log('Authorized ',Loginsession.loginuser);
    return window.confirm('you have unsaved changes still want to leave?');
  }
}
