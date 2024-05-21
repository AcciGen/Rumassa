import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtzifComponent } from './otzif.component';

describe('OtzifComponent', () => {
  let component: OtzifComponent;
  let fixture: ComponentFixture<OtzifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtzifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtzifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
