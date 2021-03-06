import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentModalComponent } from '@src/app/parent-modal/parent-modal.component';

describe('ParentModalComponent', () => {
  let component: ParentModalComponent;
  let fixture: ComponentFixture<ParentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
