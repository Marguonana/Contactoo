import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import {   MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatExpansionPanelDescription } from '@angular/material';
import { Router } from '@angular/router';


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

  constructor( private router: Router) { }

  ngOnInit() {
    let body = document.getElementById("body");
    body.style.background = " no-repeat url('../../assets/grandparent.jpg')";
    body.style.backgroundSize=  "100% auto";
  
  }

  handleConnexion() : void {
    console.log(this.person.tel)
    if (this.person.tel && (this.person.tel == "0618401183" || this.person.tel == "0000") ){
      this.router.navigate(['/welcome']);    }
  }

}
