import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Loginsession} from "./shared/loginsession";


@Injectable()
export class AuthguardService implements CanActivate{

  constructor() {
    console.log('auth log');
  }


  canActivate() {
    console.log('Authorized ',Loginsession.loginuser);
    return Loginsession.loginuser;
  }
}
