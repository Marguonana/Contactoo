import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauInfosJourneeComponent } from '@src/app/bandeau-infos-journee/bandeau-infos-journee.component';

describe('BandeauInfosJourneeComponent', () => {
  let component: BandeauInfosJourneeComponent;
  let fixture: ComponentFixture<BandeauInfosJourneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeauInfosJourneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeauInfosJourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
