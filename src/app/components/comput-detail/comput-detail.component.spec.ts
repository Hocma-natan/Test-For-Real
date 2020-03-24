import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputDetailComponent } from './comput-detail.component';

describe('ComputDetailComponent', () => {
  let component: ComputDetailComponent;
  let fixture: ComponentFixture<ComputDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
