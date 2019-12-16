import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { CreateFamilyAccountComponent } from './create-family-account/create-family-account.component';
import { FamilyComponent } from './family/family.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateMemberComponent,
    CreateFamilyAccountComponent,
    FamilyComponent,
    LoginComponent
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
