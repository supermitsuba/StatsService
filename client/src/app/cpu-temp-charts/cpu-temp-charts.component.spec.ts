import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuTempChartsComponent } from './cpu-temp-charts.component';

describe('CpuTempChartsComponent', () => {
  let component: CpuTempChartsComponent;
  let fixture: ComponentFixture<CpuTempChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuTempChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuTempChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
