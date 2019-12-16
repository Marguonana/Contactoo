import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreationCompteFamilialComponent } from './creation-compte-familial/creation-compte-familial.component';
import { MaterialModule } from './core/material.module';
import { FamilyComponent } from './family/family.component';
import { CreateMemberComponent } from './create-member/create-member.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreationCompteFamilialComponent,
    FamilyComponent,
    CreateMemberComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
