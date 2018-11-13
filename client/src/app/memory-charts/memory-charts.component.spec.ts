import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryChartsComponent } from './memory-charts.component';

describe('MemoryChartsComponent', () => {
  let component: MemoryChartsComponent;
  let fixture: ComponentFixture<MemoryChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
