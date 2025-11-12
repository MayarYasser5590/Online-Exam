import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResetEmail } from './request-reset-email';

describe('ForgetPassword', () => {
  let component: RequestResetEmail;
  let fixture: ComponentFixture<RequestResetEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestResetEmail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestResetEmail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
