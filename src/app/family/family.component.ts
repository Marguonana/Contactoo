import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import * as moment from "moment";

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
      // Plus tard, rajouter l'id
      let data = {
        corpus: this.message,
        emetteur: { nom: 'Hervé', id: '121'},
        dateEnvoi: moment()
      }
      this.api.post('message/',{data: data}).subscribe(res => console.log(res), err => console.error('error: ', err));
      this.message = "";
    }
      
  }
}
