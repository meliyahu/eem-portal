import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplingunitComponent } from './samplingunit.component';

describe('SamplingunitComponent', () => {
  let component: SamplingunitComponent;
  let fixture: ComponentFixture<SamplingunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplingunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplingunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
