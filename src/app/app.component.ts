import {Component, OnInit} from '@angular/core';
import {Loginsession} from "./firebase/shared/loginsession";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ Loginsession ]
})
export class AppComponent implements  OnInit{
  loggedornot: any;
  constructor(public _loginsession:Loginsession,private _route:Router){
    console.log('befor comp',Loginsession.loginuser);
  }

  ngOnInit(): void {
  console.log('oninit');
  this.loggedornot = Loginsession.loginuser;
  }
  login(){
    this.loggedornot = 'true';
    console.log('client',this.loggedornot);
    this._route.navigate(['/login']);
  }
  logout(){
    console.log('logout');
    this._loginsession.logout();
    this.loggedornot = Loginsession.loginuser;
    this._route.navigate(['/login']);
  }
}
