import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    user: Observable<firebase.User>;

    constructor(public afAuth: AngularFireAuth) {
        console.log('constructor');
        this.user = this.afAuth.authState;
        console.log('logged or out by firebase' );
    }
    ngOnInit() {
    }

    login() {
        this.afAuth.auth.signInAnonymously();
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    // login(details: any) {
    //
    //     if(details.username.value == 'test' && details.password.value == 'test')
    //     {
    //         console.log(details);
    //     }
    //     // this._route.navigate(['/viewall']);
    // }

}
