import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OIVComponent } from './o-i-v.component';

describe('OIVComponent', () => {
  let component: OIVComponent;
  let fixture: ComponentFixture<OIVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OIVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
