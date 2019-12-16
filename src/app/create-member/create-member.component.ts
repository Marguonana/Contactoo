import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {
  addMemberGroup : FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addMemberGroup = this._formBuilder.group({
      prenom : new FormControl(),
      email : new FormControl()
  
    })
  }

}
