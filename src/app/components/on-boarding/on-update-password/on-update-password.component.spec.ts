import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnUpdatePasswordComponent } from './on-update-password.component';

describe('OnUpdatePasswordComponent', () => {
  let component: OnUpdatePasswordComponent;
  let fixture: ComponentFixture<OnUpdatePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnUpdatePasswordComponent]
    });
    fixture = TestBed.createComponent(OnUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
