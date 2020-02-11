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

  constructor(private api: ApiService) {}

  ngOnInit() {
    let body = document.getElementById("body");
    body.style.background = "#bfdde8";
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
