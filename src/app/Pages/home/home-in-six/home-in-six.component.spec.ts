import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInSixComponent } from './home-in-six.component';

describe('HomeInSixComponent', () => {
  let component: HomeInSixComponent;
  let fixture: ComponentFixture<HomeInSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeInSixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeInSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
