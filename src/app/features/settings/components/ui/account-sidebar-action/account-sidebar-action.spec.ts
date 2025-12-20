import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSidebarAction } from './account-sidebar-action';

describe('AccountSidebarAction', () => {
  let component: AccountSidebarAction;
  let fixture: ComponentFixture<AccountSidebarAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSidebarAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSidebarAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
