import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-create-family-account',
  templateUrl: './create-family-account.component.html',
  styleUrls: ['./create-family-account.component.scss']
})
export class CreateFamilyAccountComponent implements OnInit {
  next: boolean;
  user = {
    nom: '',
    prenom: '',
    password : '',
    email : '',
    statut: '',
    dateNaissance: '',
    adresse: '',
    ville: '',
    cp: '',
    ehpad: '',
    numSecu: '',
    medecin: '',
    portable: Number,
    nomSteService: '',
    autre: '',
    infos: ''
  }

  listStatut: Array<string>;

  constructor(private router: Router, public api: ApiService) { 
    this.listStatut = ['Fils','Fille','Petit-fils','Petite-fille','Famille autre','Médecin','Infirmière','Medical autre','Ste de service','Ehpad','Autre'];
  }

  
  ngOnInit() {
    // let body = document.getElementById("body");
    // body.style.background = null;
    // body.style.backgroundSize=  null;
  }

  handleCreation(): void{
    this.api.post<any>('famille/newFamille/',{famille: this.user}).subscribe(
      res => {
        sessionStorage.setItem('famille',res);
        this.router.navigate(['/'])}, 
      err => console.error('error: ', err));
  }

  setEhpad(e){
    this.user.ehpad = e.checked;
  }

  suitePossible(): boolean{
    return !!(this.user.nom && this.user.prenom && this.user.statut && this.user.nom.trim() && this.user.prenom.trim());
  }

}

export interface Parent {
  nom : string,
  prenom: string,
  statut: string,
  dateNaissance: string,
  adresse: string,
  ville: string,
  cp: number,
  ehpad: string, // exemple: Ehpad (checkbox)
  numSecu: string,
  medecin: string,
  infos?: string
}

export interface Aidant {
  nom : string,
  prenom: string,
  statut: string,
  ville: string,
  cp: number,
  portable: number,
  mail: string,
  nomSteService: string,
  infos?: string
}