import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtabletComponent } from './addtablet.component';

describe('AddtabletComponent', () => {
  let component: AddtabletComponent;
  let fixture: ComponentFixture<AddtabletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtabletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
