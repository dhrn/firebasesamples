import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot} from "@angular/router";
import {GetfromfirebaseComponent} from "./getfromfirebase/getfromfirebase.component";

@Injectable()
export class UnchangesgurdService implements CanDeactivate<GetfromfirebaseComponent>{

  constructor(private router:Router) { }


  canDeactivate(component: GetfromfirebaseComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {
    return window.confirm('you have unsaved changes still want to leave?');
  }
}
