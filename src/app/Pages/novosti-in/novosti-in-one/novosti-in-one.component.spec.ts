import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovostiInOneComponent } from './novosti-in-one.component';

describe('NovostiInOneComponent', () => {
  let component: NovostiInOneComponent;
  let fixture: ComponentFixture<NovostiInOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovostiInOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovostiInOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
