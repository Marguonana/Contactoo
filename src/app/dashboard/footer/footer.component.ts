import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FamilleService } from '@src/app/service/famille.service';
import { ParentModalComponent } from '@src/app/parent-modal/parent-modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  hasParent: boolean;
  idUrl
  constructor(public dialog: MatDialog, public familleService: FamilleService) { }

  ngOnInit() {
    if(this.familleService.famille && this.familleService.famille.parents && this.familleService.famille.parents.length > 0 ){
      this.hasParent = true;
      this.idUrl = this.familleService.famille.parents[0]._id;
    }
  }

  gestionParent(){
    const confirmRef = this.dialog.open(ParentModalComponent, {
      width: '650px',
      data: null,
      autoFocus: false
    });
    confirmRef.afterClosed().subscribe( choix => {
    });
  }
}
