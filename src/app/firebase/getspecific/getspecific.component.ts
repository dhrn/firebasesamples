import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import {ActivatedRoute, Params} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import 'rxjs/add/operator/map';
import {Employee} from "../shared/Employees";

@Component({
  selector: 'app-getspecific',
  templateUrl: './getspecific.component.html',
  styleUrls: ['./getspecific.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GetspecificComponent implements OnInit {

  item: FirebaseObjectObservable<any>;

  constructor(public afAuth: AngularFireAuth,public af: AngularFireDatabase,private route: ActivatedRoute) {
    this.item = af.object('/users');
  }


  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.item = this.af.object('/users/'+this.route.snapshot.params['id'], { preserveSnapshot: true });
    console.log('after get from fire',this.item.subscribe(x=>console.log(x.values)));
    this.item.subscribe(snapshot => {
      console.log('key',snapshot.key)
      console.log('value',snapshot.val())
    });
    this.item.subscribe(
        x => console.log('onNext: %s', x),
        e => console.log('onError: %s', e),
        () => console.log('onCompleted'));
  }

}
