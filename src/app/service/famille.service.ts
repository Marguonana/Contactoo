import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FamilleService {

  famille: any;

  constructor() {
    if (!this.famille){
      this.setFamille(JSON.parse(sessionStorage.getItem('famille')));
    }
  }

  setFamille(famille: any) : void{
    if (famille){
      this.famille = famille;
    }
  }
}
