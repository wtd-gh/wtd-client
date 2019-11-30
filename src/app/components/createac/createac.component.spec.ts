import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateacComponent } from './createac.component';

describe('CreateacComponent', () => {
  let component: CreateacComponent;
  let fixture: ComponentFixture<CreateacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
