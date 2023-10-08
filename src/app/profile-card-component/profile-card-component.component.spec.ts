import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardComponentComponent } from './profile-card-component.component';

describe('ProfileCardComponentComponent', () => {
  let component: ProfileCardComponentComponent;
  let fixture: ComponentFixture<ProfileCardComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCardComponentComponent]
    });
    fixture = TestBed.createComponent(ProfileCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
