import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuthguardService implements CanActivate{

  constructor() {
    console.log('auth log');
  }


  canActivate() {
    console.log('activated ');
    return true;
  }
}
