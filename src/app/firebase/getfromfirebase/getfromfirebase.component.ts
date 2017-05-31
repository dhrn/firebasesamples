import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Router} from "@angular/router";

@Component({
  selector: 'app-getfromfirebase',
  templateUrl: './getfromfirebase.component.html',
  styleUrls: ['./getfromfirebase.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GetfromfirebaseComponent implements OnInit {
  itemsuser: FirebaseListObservable<any[]>;
  getuser: any;
  selectedname ;
  selectedtoken;
  selectedgender;
  selectedage;
  selectedposition;
  selectedcompany;
  constructor(public af: AngularFireDatabase,private  _router:Router) { }

  ngOnInit() {
   this.getall();
  }

  getall() {
    this.itemsuser = this.af.list('/users');
    console.log('getuser', this.itemsuser);
  }


    onSelect(item:any){
      this.selectedname = item.name;
      this.selectedtoken = item.$key;
      this.selectedgender = item.gender;
      this.selectedage = item.age;
      this.selectedcompany=item.company;
      this.selectedposition = item.position;
      console.log('clicked', this.selectedtoken , this.selectedage);
    }
  navigate(){
  this._router.navigate(['/get',this.selectedtoken]);
  }
  adduser(){
    this._router.navigate(['/adduser']);
  }
}
