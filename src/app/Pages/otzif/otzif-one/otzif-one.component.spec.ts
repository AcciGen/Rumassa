import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtzifOneComponent } from './otzif-one.component';

describe('OtzifOneComponent', () => {
  let component: OtzifOneComponent;
  let fixture: ComponentFixture<OtzifOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtzifOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtzifOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
