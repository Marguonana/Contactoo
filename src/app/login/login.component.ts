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

  password : string;
  email : string;

  constructor( private router: Router) { }

  ngOnInit() {

  
  }

  handleConnexion() : void {
    console.log(this.email)
    if (this.password && this.email && this.email == "admin@contactoo.fr" && this.password == "admin"){
      this.router.navigate(['/family']);    }
  }

}
