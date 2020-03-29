import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from '../service/api.service';
import { FamilleService } from '../service/famille.service';

@Component({
  selector: 'app-parent-modal',
  templateUrl: './parent-modal.component.html',
  styleUrls: ['./parent-modal.component.scss']
})
export class ParentModalComponent implements OnInit {
  msg: string;
  parent = {
    nom: '',
    prenom: '',
    dateNaissance: '',
    numSecu: '',
    adresse: '',
    ville: '',
    cp: '',
    medecin: '',
    lieuDeVie: []
  };
  ehpad: boolean;
  domicile: boolean;
  autre: boolean;

  nouveauParent;
  constructor(
    public modalRef: MatDialogRef<ParentModalComponent>,
    public api: ApiService,
    public familleService: FamilleService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    if(this.familleService.famille && this.familleService.famille.parents && this.familleService.famille.parents.length > 0){
      this.parent = this.familleService.famille.parents[0];
      if(this.parent.lieuDeVie.length > 0){
        if(this.parent.lieuDeVie.includes('EHPAD'))
          this.ehpad = true;
        if(this.parent.lieuDeVie.includes('DOMICILE'))
          this.domicile = true;
        if(this.parent.lieuDeVie.includes('AUTRE'))
          this.autre = true;
      }
    }
  }

  setEhpad(event){
    this.ehpad = event.checked;
  }

  setDomicile(event){
    this.domicile = event.checked;
  }
  
  setAutre(event){
    this.autre = event.checked;
  }

  setLieuDeVie(){
    this.parent.lieuDeVie = new Array();
    if (this.ehpad){
      this.parent.lieuDeVie.push('EHPAD');
    }
    if (this.domicile){
      this.parent.lieuDeVie.push('DOMICILE')
    }
    if (this.autre){
      this.parent.lieuDeVie.push('AUTRE');
    }
    console.log('lieu :', this.parent.lieuDeVie)
  }

  sauvegarder(){
    this.setLieuDeVie();
    this.api.post('parent/nouveau/',{parent: this.parent})
      .subscribe(
        parentCreer => {
          this.nouveauParent = parentCreer; 
          this.api.post('famille/parent',{id: this.familleService.famille._id, parent: parentCreer})
          .subscribe(
            res => {this.familleService.famille.parents = new Array(this.nouveauParent); sessionStorage.setItem('famille',JSON.stringify(this.familleService.famille))},
            err => console.error('Erreur lors de l\'ajout du parent dans la famille. ',err)
          )}, 
        err => console.error('Erreur lors de la création du parent. ', err));
  }
}