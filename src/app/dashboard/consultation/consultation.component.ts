import { Component, OnInit, ChangeDetectionStrategy, DoCheck, OnDestroy } from '@angular/core';
import { ApiService } from '@src/app/service/api.service';
import { HttpParams } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ConsultationComponent implements OnInit, OnDestroy {

  /**
   * Prochainement: Array<object> = { 'nom': '', msg: ''}
   */
  messageList;
  consultation = true;
  aucunMsg;
  observableMsgList;

  constructor(private api : ApiService) { }

  ngOnInit() {  
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    this.observableMsgList = Observable.create((observer : any) => {
      try {
        setInterval(() => {
          observer.next(this.checkMessage())
        },1000)
      } catch (err){
        observer.error(err);
      }
    }) 
    this.observableMsgList.subscribe();
  }

  checkMessage() {
    this.api.getUnhandled<Array<string>>('message/').toPromise()
    .then(received => {
      if(received && received.length > 0){
        this.messageList = received;
        if (this.messageList && this.messageList.length < 0){
          this.aucunMsg = true;
        }else{
          this.aucunMsg = false;
        }
      }
    })
    .catch( err => this.aucunMsg = true)   
  }

  deleteMsg(text) {
    this.messageList = this.messageList.filter(el => { return el != text});
  }

  ngOnDestroy() {
    this.observableMsgList.unsubscribe();
  }

}
