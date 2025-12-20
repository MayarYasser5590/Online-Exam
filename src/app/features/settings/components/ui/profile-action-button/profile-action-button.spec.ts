import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileActionButton } from './profile-action-button';

describe('ProfileActionButton', () => {
  let component: ProfileActionButton;
  let fixture: ComponentFixture<ProfileActionButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileActionButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileActionButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
