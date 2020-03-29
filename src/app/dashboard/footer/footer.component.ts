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

  constructor(public dialog: MatDialog, public familleService: FamilleService) { }

  ngOnInit() {
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
