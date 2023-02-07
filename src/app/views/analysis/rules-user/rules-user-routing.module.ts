import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesUserComponent } from './rules-user.component';

const routes: Routes = [{ path: '', component: RulesUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesUserRoutingModule { }
