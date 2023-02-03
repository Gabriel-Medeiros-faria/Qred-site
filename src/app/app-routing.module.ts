import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component'
import { DocumentsUserComponent} from './views/documents-user/documents-user.component'
import { VerifyUuidComponent } from './components/verify-uuid/verify-uuid.component';


const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path:"documents",
  component: DocumentsUserComponent
},
{
  path:"verifyUuid",
  component: VerifyUuidComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
