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
    email : ''
  }

  constructor( private router: Router) { }

  ngOnInit() {

  
  }

  handleConnexion() : void {
    console.log(this.person.email)
    if (this.person.password && this.person.email && this.person.email.toUpperCase() === "admin@contactoo.fr".toUpperCase() && this.person.password == "admin"){
      this.router.navigate(['/family']);    }
  }

}
