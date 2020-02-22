import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateFamilyAccountComponent } from './create-family-account/create-family-account.component';
import { FamilyComponent } from './family/family.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { ConsultationComponent } from './dashboard/consultation/consultation.component';
import { RendezVousComponent } from './dashboard/rendez-vous/rendez-vous.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'compte', component: CreateFamilyAccountComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: '', component: LoginComponent},
  { path: 'family', component: FamilyComponent},
  { path: 'addMember', component: CreateMemberComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'consultation', component: ConsultationComponent},
  { path:'rdv', component: RendezVousComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
