import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresDostavkiComponent } from './adres-dostavki.component';

describe('AdresDostavkiComponent', () => {
  let component: AdresDostavkiComponent;
  let fixture: ComponentFixture<AdresDostavkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdresDostavkiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdresDostavkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
