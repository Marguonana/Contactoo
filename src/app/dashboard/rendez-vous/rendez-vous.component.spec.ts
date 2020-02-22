import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousComponent } from '@src/app/dashboard/rendez-vous/rendez-vous.component';

describe('RendezVousComponent', () => {
  let component: RendezVousComponent;
  let fixture: ComponentFixture<RendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
