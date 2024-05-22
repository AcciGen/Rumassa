import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPComponent } from './o-p.component';

describe('OPComponent', () => {
  let component: OPComponent;
  let fixture: ComponentFixture<OPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
