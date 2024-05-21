import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkidkiSidebarComponent } from './skidki-sidebar.component';

describe('SkidkiSidebarComponent', () => {
  let component: SkidkiSidebarComponent;
  let fixture: ComponentFixture<SkidkiSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkidkiSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkidkiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
