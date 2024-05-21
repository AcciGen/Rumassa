import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovostiInComponent } from './novosti-in.component';

describe('NovostiInComponent', () => {
  let component: NovostiInComponent;
  let fixture: ComponentFixture<NovostiInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovostiInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovostiInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
