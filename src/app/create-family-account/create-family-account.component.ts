import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-family-account',
  templateUrl: './create-family-account.component.html',
  styleUrls: ['./create-family-account.component.scss']
})
export class CreateFamilyAccountComponent implements OnInit {

  creationFamilleForm : FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creationFamilleForm = this._formBuilder.group({
      familyName : new FormControl(),
      creatorName : new FormControl(),
      email : new FormControl(),
      sharedPassword : new FormControl()
    });
  }

}