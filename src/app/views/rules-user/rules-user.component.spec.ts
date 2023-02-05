import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesUserComponent } from './rules-user.component';

describe('RulesUserComponent', () => {
  let component: RulesUserComponent;
  let fixture: ComponentFixture<RulesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
