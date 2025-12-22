import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPasswordIcon } from './show-password-icon';

describe('ShowPasswordIcon', () => {
  let component: ShowPasswordIcon;
  let fixture: ComponentFixture<ShowPasswordIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPasswordIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPasswordIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
