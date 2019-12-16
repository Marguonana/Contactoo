import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CreationCompteFamilialComponent } from '../creation-compte-familial/creation-compte-familial.component';
import { FamilyComponent } from '../family/family.component';
import { CreateMemberComponent } from '../create-member/create-member.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: CreationCompteFamilialComponent},
  { path: 'family', component: FamilyComponent},
  { path: 'addMember', component: CreateMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
