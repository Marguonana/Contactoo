import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  DoCheck,
  OnDestroy
} from "@angular/core";
import { ApiService } from "@src/app/service/api.service";
import { HttpParams } from "@angular/common/http";
import { Observable, interval } from "rxjs";
import * as moment from "moment";
import { map, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-consultation",
  templateUrl: "./consultation.component.html",
  styleUrls: ["./consultation.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsultationComponent implements OnInit, OnDestroy {
  /**
   * Prochainement: Array<object> = { 'nom': '', msg: ''}
   */
  messageList;
  consultation = true;
  aucunMsg;
  observableMsgList;

  pageLoaded: moment.Moment;
  dateComplete:string;
  dateEtMomentDeLaJournee:string;
  heure;

  constructor(private api: ApiService) {}

  ngOnInit() {
    let container = document.getElementById("dashboard-container");
    container.classList.remove("container");
    this.heure = interval(1000*6).pipe( map(()=>
    {
      this.pageLoaded = moment(new Date());
      return this.pageLoaded.format("HH:mm");
     })
    )
    this.observableMsgList = Observable.create((observer: any) => {
      try {
        setInterval(() => {
          observer.next(this.checkMessage());
        }, 1000);
      } catch (err) {
        observer.error(err);
      }
    });
    this.observableMsgList.subscribe();
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





  checkMessage() {
    this.api
      .getUnhandled<Array<any>>("message/laFamille")
      .toPromise()
      .then(received => {
        if (received && received.length > 0) {
          
          
          this.messageList = received.slice(-3);
          if (this.messageList && this.messageList.length < 0) {
            this.aucunMsg = true;
          } else {
            this.aucunMsg = false;
          }
        }
      })
      .catch(err => (this.aucunMsg = true));
  }

  deleteMsg(text) {
    this.messageList = this.messageList.filter(el => {
      return el != text;
    });
  }

  requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    }
}
  

  ngOnDestroy() {
    this.observableMsgList.unsubscribe();
  }
}
