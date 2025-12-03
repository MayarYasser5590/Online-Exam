import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamHeader } from './exam-header';

describe('ExamHeader', () => {
  let component: ExamHeader;
  let fixture: ComponentFixture<ExamHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
