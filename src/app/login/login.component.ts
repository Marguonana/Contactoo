import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import {   MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatExpansionPanelDescription } from '@angular/material';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FamilleService } from '../service/famille.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  person = {
    password : '',
    email : '',
    tel: ''
  }

  constructor( private router: Router, public api: ApiService, public familleService: FamilleService) { }

  ngOnInit() {
    let body = document.getElementById("body");
    body.style.background = " no-repeat url('../../assets/grandparent.jpg')";
    body.style.backgroundSize=  "cover";
    body.style.backgroundPosition = "center center";
  
  }

  cleanInput(input : string) : void{
    switch(input){
      case 'tel':
        this.person.tel = undefined;
        break;
      case 'email':
        this.person.email = undefined;
        break;
      default:
        this.person.email = undefined;
        this.person.tel = undefined;
        break;
    }
  }

  handleConnexion() : void {
    if (this.person.tel){
      this.api.post<any>('famille/loginByTel/',{tel: this.person.tel}).subscribe(
        famille => {
          sessionStorage.setItem('famille',JSON.stringify(famille));
          this.familleService.setFamille(famille);
          this.router.navigate(['/welcome'])}, 
        err => console.error('error: ', err));
      return; 
    }
    else if(this.person.email){
      this.api.post<any>('famille/loginByEmail/',{email: this.person.email}).subscribe(
        famille => {
          sessionStorage.setItem('famille',JSON.stringify(famille));
          this.familleService.setFamille(famille);
          this.router.navigate(['/welcome'])}, 
        err => console.error('error: ', err));
      return;
    }
  }

}
