import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCompteFamilialComponent } from './creation-compte-familial.component';

describe('CreationCompteFamilialComponent', () => {
  let component: CreationCompteFamilialComponent;
  let fixture: ComponentFixture<CreationCompteFamilialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationCompteFamilialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationCompteFamilialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
