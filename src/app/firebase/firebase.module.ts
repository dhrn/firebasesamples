import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetfromfirebaseComponent } from './getfromfirebase/getfromfirebase.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {RouterMod} from "./routermodule";
import { NotfoundComponent } from './notfound/notfound.component';
import {AuthguardService} from "./authguard.service";
import {UnchangesgurdService} from "./unchangesgurd.service";
import { GetspecificComponent } from './getspecific/getspecific.component';
import { AdduserComponent } from './adduser/adduser.component';
import {RemoveuserComponent} from "./removeuser/removeuser.component";
import { SearchfromfirebaseComponent } from './searchfromfirebase/searchfromfirebase.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyCNzxEZoVK3AsIoeq3gW72ZOB7To2edAtM',
  authDomain: 'fir-sample-d7676.firebaseapp.com',
  databaseURL: 'https://fir-sample-d7676.firebaseio.com',
  projectId: 'fir-sample-d7676',
  storageBucket: 'fir-sample-d7676.appspot.com',
  messagingSenderId: '945541818416'
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterMod,
    
    ],
  declarations: [GetfromfirebaseComponent, LoginComponent, NotfoundComponent, GetspecificComponent, AdduserComponent,RemoveuserComponent, SearchfromfirebaseComponent],
  exports: [ LoginComponent  ],
  providers: [ AuthguardService , UnchangesgurdService  ]
})
export class FirebaseModule { }
