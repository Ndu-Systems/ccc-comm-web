/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TakingSelftestComponent } from './taking-selftest.component';

describe('TakingSelftestComponent', () => {
  let component: TakingSelftestComponent;
  let fixture: ComponentFixture<TakingSelftestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakingSelftestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakingSelftestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
