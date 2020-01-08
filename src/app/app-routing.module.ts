import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateFamilyAccountComponent } from './create-family-account/create-family-account.component';
import { FamilyComponent } from './family/family.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { ConsultationComponent } from './dashboard/consultation/consultation.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'create', component: CreateFamilyAccountComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: '', component: LoginComponent},
  { path: 'family', component: FamilyComponent},
  { path: 'addMember', component: CreateMemberComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'consultation', component: ConsultationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
