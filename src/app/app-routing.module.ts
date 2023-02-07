import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component'
import { DocumentsUserComponent} from './views/documents-user/documents-user.component'
import { AnalysisComponent } from './views/analysis/analysis.component'

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path:"documents",
  component: DocumentsUserComponent
},
{
  path:"analysis/:id",
  component: AnalysisComponent
},
{ path: 'rulesUser', loadChildren: () => import('./views/analysis/rules-user/rules-user.module').then(m => m.RulesUserModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
