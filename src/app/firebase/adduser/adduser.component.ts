import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AdduserComponent implements OnInit {
  newuser: FirebaseListObservable<any[]>;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase,private  _router:Router) {
    this.newuser = af.list('/users');
  }

  ngOnInit() {

  }

  putuser(data:any){
  this.newuser.push(data);
  console.log(data);
  }
}
