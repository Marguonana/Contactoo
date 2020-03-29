import { Component, OnInit } from '@angular/core';
import { FamilleService } from '@src/app/service/famille.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  familyName: string;

  constructor(public familleService: FamilleService) { }

  ngOnInit() {
    let body = document.getElementById("body");
    body.style.background = null;
    body.style.backgroundSize=  null;
    this.familyName = this.familleService.famille.nom;
  }

}
