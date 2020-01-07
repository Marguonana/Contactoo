import { Component, OnInit } from '@angular/core';
import { ApiService } from '@src/app/service/api.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  /**
   * Prochainement: Array<object> = { 'nom': '', msg: ''}
   */
  messageList : Array<string>;
  consultation = true;

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.api.getUnhandled<Array<string>>('message/').toPromise()
    .then(received => {
      if(received && received.length > 0){
        this.messageList = received;
      }
    })
    .catch( err => console.error)
  }

  deleteMsg(text) {
    this.messageList = this.messageList.filter(el => { return el != text});
  }

}
