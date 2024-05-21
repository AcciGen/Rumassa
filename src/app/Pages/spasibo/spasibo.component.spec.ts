import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpasiboComponent } from './spasibo.component';

describe('SpasiboComponent', () => {
  let component: SpasiboComponent;
  let fixture: ComponentFixture<SpasiboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpasiboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpasiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
