import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyUuidComponent } from './verify-uuid.component';

describe('VerifyUuidComponent', () => {
  let component: VerifyUuidComponent;
  let fixture: ComponentFixture<VerifyUuidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyUuidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyUuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
