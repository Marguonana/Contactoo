import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

message : string;

  constructor(private api : ApiService) { }

  ngOnInit() {
  }

  sendMsg() : void {
    if (this.message){
      console.log("Message à transmettre : ",this.message);
      this.api.post('message/',{txt: this.message}).subscribe(res => console.log(res), err => console.error('error: ', err));
      this.message = "";
    }
      
  }
}
