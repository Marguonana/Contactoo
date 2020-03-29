import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-parent-modal',
  templateUrl: './parent-modal.component.html',
  styleUrls: ['./parent-modal.component.scss']
})
export class ParentModalComponent implements OnInit {
  msg: string;
  constructor(
    public modalRef: MatDialogRef<ParentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
  }

  sauvegarder(){

  }
}
