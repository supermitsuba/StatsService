import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuChartsComponent } from './cpu-charts.component';

describe('CpuChartsComponent', () => {
  let component: CpuChartsComponent;
  let fixture: ComponentFixture<CpuChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
