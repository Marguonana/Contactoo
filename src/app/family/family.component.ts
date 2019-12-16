import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
message : string;
  constructor() { }

  ngOnInit() {
  }

  sendMsg() : void {
    if (this.message){
      console.log("Message à transmettre : ",this.message);
      alert("Message transmis.")
      this.message = "";
    }
      
  }
}
