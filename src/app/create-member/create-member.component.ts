import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  nom: string;
  email: string;
  prenom: string; 

  constructor() { }

  ngOnInit() {
  }

  addMember() {
    
  }

  toCreateFamily(){}

}
