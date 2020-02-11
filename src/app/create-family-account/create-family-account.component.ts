import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
    portable: '',
    nomSteService: '',
    autre: '',
    infos: ''
  }

  listStatut: Array<string>;

  constructor(private router: Router) { 
    this.listStatut = ['Parent','Fils','Fille','Petit-fils','Petite-fille','Famille autre','Médecin','Infirmière','Medical autre','Ste de service','Autre'];
  }

  
  ngOnInit() {
    // let body = document.getElementById("body");
    // body.style.background = null;
    // body.style.backgroundSize=  null;
  }

  toCreateFamily(){
    
  }

  handleCreation() : void {
    this.router.navigate(['/welcome']);    
  }

  setEhpad(e){
    this.user.ehpad = e.checked;
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