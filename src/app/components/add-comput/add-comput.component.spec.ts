import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComputComponent } from './add-comput.component';

describe('AddComputComponent', () => {
  let component: AddComputComponent;
  let fixture: ComponentFixture<AddComputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
