import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-removeuser',
  templateUrl: './removeuser.component.html',
  styleUrls: ['./removeuser.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RemoveuserComponent implements OnInit {
  itemsuser: FirebaseListObservable<any[]>;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase,private  _router:Router) {
    this.itemsuser = this.af.list('/users');
  }

  ngOnInit() {
  }

  remove(key:any){
    this.itemsuser.remove(key);
  }
}
