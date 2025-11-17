import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorResponseMsg } from './error-response-msg';

describe('ErrorResponseMsg', () => {
  let component: ErrorResponseMsg;
  let fixture: ComponentFixture<ErrorResponseMsg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorResponseMsg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorResponseMsg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
