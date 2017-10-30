import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftComponent } from './soft.component';

describe('SoftComponent', () => {
  let component: SoftComponent;
  let fixture: ComponentFixture<SoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
