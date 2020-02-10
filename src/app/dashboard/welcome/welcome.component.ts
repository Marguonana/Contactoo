import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let body = document.getElementById("body");
    body.style.background = null;
    body.style.backgroundSize=  null;
  }

}
