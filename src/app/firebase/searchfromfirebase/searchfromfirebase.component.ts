import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {Employee} from "../shared/Employees";


@Component({
  selector: 'app-searchfromfirebase',
  templateUrl: './searchfromfirebase.component.html',
  styleUrls: ['./searchfromfirebase.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchfromfirebaseComponent implements OnInit {

  allemp: Employee[];
  filtered: Employee[];
    constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.af.list('/users')
        .map(Employee.fromJsonList)
        .subscribe(
            lessons => this.allemp = lessons
        )
    }

  filtering(myfilter) {
    this.filtered = this.allemp.filter(x => x.name.includes(myfilter));
    console.log(this.filtered);
  }
}
