import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Loginsession} from "../shared/loginsession";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    // user: Observable<firebase.User>;
    //
    // constructor(public afAuth: AngularFireAuth) {
    //     console.log('constructor');
    //     this.user = this.afAuth.authState;
    //     console.log('logged or out by firebase' );
    // }
    ngOnInit() {
    }

    // login() {
    //     this.afAuth.auth.signInAnonymously();
    // }
    //
    // logout() {
    //     this.afAuth.auth.signOut();
    // }

    constructor(private _route:Router,private  _loginsession:Loginsession){}

    login(){
        this._loginsession.login();
        console.log('server',Loginsession.loginuser);
        this._route.navigate(['/viewall']);
    }

}
