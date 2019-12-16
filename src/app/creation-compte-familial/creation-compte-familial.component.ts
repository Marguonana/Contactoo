import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creation-compte-familial',
  templateUrl: './creation-compte-familial.component.html',
  styleUrls: ['./creation-compte-familial.component.scss']
})
export class CreationCompteFamilialComponent implements OnInit {

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
