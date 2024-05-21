import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovostiOneComponent } from './novosti-one.component';

describe('NovostiOneComponent', () => {
  let component: NovostiOneComponent;
  let fixture: ComponentFixture<NovostiOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovostiOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovostiOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
