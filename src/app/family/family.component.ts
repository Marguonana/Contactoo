import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import * as moment from "moment";
import { FamilleService } from '../service/famille.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

message : string;
aucunParentRelier : boolean;
nom;
  constructor(private api : ApiService, private familleService: FamilleService) { }

  ngOnInit() {
    if (this.familleService.famille && (!this.familleService.famille.parents || this.familleService.famille.parents.length < 1 ))
      this.aucunParentRelier = true;
    this.nom = this.familleService.famille.nom;
  }

  sendMsg() : void {
    if (this.message){
      console.log("Message à transmettre : ",this.message);
      // Plus tard, rajouter l'id
      let data = {
        corpus: this.message,
        emetteur: { nom: this.familleService.famille.prenom, id: this.familleService.famille._id},
        dateEnvoi: moment()
      }
      this.api.post('message/groupe/'+this.familleService.famille.parents[0]._id,{data: data}).subscribe(res => console.log('lien d\'accès: ',res), err => console.error('error: ', err));
      this.message = "";
    }
      
  }
}
