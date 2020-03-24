import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComputComponent } from './edit-comput.component';

describe('EditComputComponent', () => {
  let component: EditComputComponent;
  let fixture: ComponentFixture<EditComputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
