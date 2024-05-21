import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KOZComponent } from './k-o-z.component';

describe('KOZComponent', () => {
  let component: KOZComponent;
  let fixture: ComponentFixture<KOZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KOZComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KOZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
