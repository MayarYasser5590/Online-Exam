import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPagesContainer } from './dashboard-pages-container';

describe('DashboardPagesContainer', () => {
  let component: DashboardPagesContainer;
  let fixture: ComponentFixture<DashboardPagesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPagesContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPagesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
