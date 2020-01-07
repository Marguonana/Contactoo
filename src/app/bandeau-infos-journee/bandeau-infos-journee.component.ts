import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-bandeau-infos-journee',
  templateUrl: './bandeau-infos-journee.component.html',
  styleUrls: ['./bandeau-infos-journee.component.scss']
})
export class BandeauInfosJourneeComponent implements OnInit {

  dateComplete:string;
  dateEtMomentDeLaJournee:string;
  heure:string;

  constructor() { }

  ngOnInit() {
  }

  getDateComplete():string{
    this.dateComplete = moment().lang("fr").format("Do MMMM YYYY")
    return this.dateComplete;
  }

  getDateEtMomentDeLaJournee():string{
    this.dateEtMomentDeLaJournee = moment().lang("fr").format("dddd") + this.determinerMomentDeLaJournee();
    return this.dateEtMomentDeLaJournee
  }

  determinerMomentDeLaJournee():string{
    if (moment().lang("fr").format("HH") >= "06" && moment().lang("fr").format("HH") < "12"){
      return " matin";
    }
    if (moment().lang("fr").format("HH") >= "12" && moment().lang("fr").format("HH") < "18"){
      return " après-midi";
    }
    if (moment().lang("fr").format("HH") >= "18" && moment().lang("fr").format("HH") < "22"){
      return " soir";
    }
    if (moment().lang("fr").format("HH") >= "22" && moment().lang("fr").format("HH") < "24"){
      return " (nuit)";
    }
    if (moment().lang("fr").format("HH") >= "00" && moment().lang("fr").format("HH") < "06"){
      return " (nuit)";
    }
    return "non déterminé";
  }

  getHeure():string{
    this.heure = moment().lang("fr").format("HH") + " h " + moment().lang("fr").format("mm") + " mn "
    return this.heure;
  }

}
