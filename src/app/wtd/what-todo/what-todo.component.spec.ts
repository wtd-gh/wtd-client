import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatTodoComponent } from './what-todo.component';

describe('WhatTodoComponent', () => {
  let component: WhatTodoComponent;
  let fixture: ComponentFixture<WhatTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
