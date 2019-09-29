import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DidItComponent } from './did-it.component';

describe('DidItComponent', () => {
  let component: DidItComponent;
  let fixture: ComponentFixture<DidItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DidItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
