import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithoutNavComponent } from './layout-without-nav.component';

describe('LayoutWithoutNavComponent', () => {
  let component: LayoutWithoutNavComponent;
  let fixture: ComponentFixture<LayoutWithoutNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutWithoutNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutWithoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
