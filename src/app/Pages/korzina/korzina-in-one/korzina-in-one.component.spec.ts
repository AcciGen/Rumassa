import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorzinaInOneComponent } from './korzina-in-one.component';

describe('KorzinaInOneComponent', () => {
  let component: KorzinaInOneComponent;
  let fixture: ComponentFixture<KorzinaInOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KorzinaInOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KorzinaInOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
