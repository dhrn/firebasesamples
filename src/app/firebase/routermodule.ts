import { Routes,RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {GetfromfirebaseComponent} from "./getfromfirebase/getfromfirebase.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {AuthguardService} from "./authguard.service";
import {UnchangesgurdService} from "./unchangesgurd.service";
import {GetspecificComponent} from "./getspecific/getspecific.component";
import {AdduserComponent} from "./adduser/adduser.component";
import {RemoveuserComponent} from "./removeuser/removeuser.component";
import {SearchfromfirebaseComponent} from "./searchfromfirebase/searchfromfirebase.component";

const route:Routes=[
    { path: '',redirectTo: '/login', pathMatch: 'full' },
    {path:'login',component:LoginComponent},
    {path:'adduser',component:AdduserComponent},
    {path:'viewall',component:GetfromfirebaseComponent },
    {path:'get/:id',component: GetspecificComponent },
    {path:'delete', component:RemoveuserComponent},
    {path: 'search', component:SearchfromfirebaseComponent},
    {path:'**', component:NotfoundComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(route) ],
    exports: [ RouterModule ]
})
export class RouterMod {
}
