import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  DoCheck,
  OnDestroy
} from "@angular/core";
import { ApiService } from "@src/app/service/api.service";
import { HttpParams } from "@angular/common/http";
import { Observable, interval, Subscription } from "rxjs";
import * as moment from "moment";
import { map, distinctUntilChanged } from "rxjs/operators";
import { Route, ActivatedRoute } from '@angular/router';

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

  messagesDemain;
  messagesAujourdhui;

  constructor(private api: ApiService, private router: ActivatedRoute) {}

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
      .getUnhandled<Array<any>>("message/id/"+this.router.snapshot.paramMap.get('id'))
      .toPromise()
      .then(received => {
        if (received && received.length > 0) {
          this.classerMessage(received);
          if (this.messageList && this.messageList.length < 0) {
            this.aucunMsg = true;
          } else {
            this.aucunMsg = false;
          }
        }
      })
      .catch(err => (this.aucunMsg = true));
  }

  classerMessage(listMsg){
    this.messagesDemain = listMsg.filter(msg => msg.dateEvenement && msg.dateEvenement.toString().includes(moment().add(1,'days').format('DD/MM/YYYY')) )
    this.messagesAujourdhui = listMsg.filter(msg => msg.dateEvenement &&  msg.dateEvenement.toString().includes(moment().format('DD/MM/YYYY')) )
    this.messagesDemain = this.messagesDemain.slice(-3);
    this.messagesAujourdhui = this.messagesAujourdhui.slice(-3);
    this.messageList = listMsg.filter(msg => {
      let notSave = true;
      this.messagesDemain.forEach(demain => {
        if (demain.dateEnvoi === msg.dateEnvoi)
          notSave = false;
      });
      if(!notSave) return false;
      this.messagesAujourdhui.forEach(today => {
        if (today.dateEnvoi === msg.dateEnvoi)
          return false
      });
      if(!notSave) return false;
      else return true;
    })
    this.messageList = this.messageList.slice(-3);
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
