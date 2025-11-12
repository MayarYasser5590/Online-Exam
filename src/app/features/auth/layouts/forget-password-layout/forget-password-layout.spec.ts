import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordLayout } from './forget-password-layout';

describe('ForgetPasswordLayout', () => {
  let component: ForgetPasswordLayout;
  let fixture: ComponentFixture<ForgetPasswordLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPasswordLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
