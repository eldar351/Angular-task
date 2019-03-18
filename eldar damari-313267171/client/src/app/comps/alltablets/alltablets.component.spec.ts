import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltabletsComponent } from './alltablets.component';

describe('AlltabletsComponent', () => {
  let component: AlltabletsComponent;
  let fixture: ComponentFixture<AlltabletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltabletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltabletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
