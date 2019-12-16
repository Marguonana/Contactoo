import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFamilyAccountComponent } from './create-family-account.component';

describe('CreateFamilyAccountComponent', () => {
  let component: CreateFamilyAccountComponent;
  let fixture: ComponentFixture<CreateFamilyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFamilyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFamilyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
